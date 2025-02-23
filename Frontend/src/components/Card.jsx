import { useContext, useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { CountContext } from "./UseContextHook";


export default function Card({ response }) {
  const {setCount} = useContext(CountContext)
  const [favorites, setFavorites] = useState([]);
  
  const navigate = useNavigate();

  function handleCard(ele) {
    navigate("/SelectedProduct", { state: ele });
  }


  const isFavorite = (product) => {
    return favorites.some((fav) => fav.id === product.id);
  };


  useEffect(() => {
    async function fetchFavorites() {
      try {
        const res = await axios.get(
          "https://bluefly-com-clone-6ri4.onrender.com/addProduct/getFavouriteData"
        );
        setFavorites(res.data.data);
        setCount(res.data.data.length)
      } 
      catch (error) {
        console.error("Error fetching favorites:", error);
      }
    }
    fetchFavorites();
  }, [setCount]);

  async function handleFav(ele) {
    const token = localStorage.getItem("token")

    if(!token){
      navigate("/Login")
      return
    }

    try {
      const res = await axios.post(
        "https://bluefly-com-clone-6ri4.onrender.com/addProduct/favouriteData",
        ele,
        {headers:{Authorization : `Bearer ${token}`}}
      );
      console.log("Favourite Data", res.data);

      if (res.data.message === "Favourite added") {
        setFavorites((prev) => [...prev, ele]);
        setCount((prevCount)=> prevCount + 1);
      } else if (res.data.message === "Favourite removed") {
        setFavorites((prev) => prev.filter((fav) => fav.id !== ele.id));
        setCount((prevCount) => Math.max(0, prevCount - 1));
      }
    } catch (error) {
      console.log("Favourite error - ", error);
    } 
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
      {response.length > 0 ? (
        response.map((ele, i) => (
          <div className="w-[14vw] m-[1vw]" key={i}>
            <div className="relative group">
              <img
                className="w-[12vw] h-fit"
                src={ele.image1}
                onClick={() => handleCard(ele)}
              />
              <img
                className="absolute w-[12vw] h-fit top-0 left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                src={ele.image2}
                onClick={() => handleCard(ele)}
              />
            </div>
            <FontAwesomeIcon
              className="text-[1.5vw] relative left-[11vw] bottom-[1vw]"
              icon={isFavorite(ele) ? solidHeart : regularHeart}
              onClick={() => handleFav(ele)}
            />
            <h1 className="text-[1.5vw]" onClick={() => handleCard(ele)}>
              {ele.productName}
            </h1>
            <span className="line-through opacity-70">
              ${ele.orignalPrice}
            </span>
            <span className="text-[1.5vw] p-[5px]">${ele.sellingPrice}</span>
            <p>{ele.color.toUpperCase()} COLOR AVAILABLE </p>
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}
