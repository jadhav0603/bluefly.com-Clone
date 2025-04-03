import { useState, useEffect } from "react"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function FavouritePage() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchFavorites() {
      try {
        const token = localStorage.getItem('token')
        console.log(token)

        const response = await axios.get(
          "http://localhost:3000/addProduct/getFavouriteData",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        console.log(response.data.data);
        setData(response.data.data);

      }
      catch (error) {
        console.error("Error fetching favorites page data:", error);
      }
    }
    fetchFavorites();
  }, []);

  const handleUnfavourite = () => {
    console.log("unfavourite run")
  }

  return (
    <div className="w-[90vw] m-auto">
      <div className="flex flex-col items-center p-[20px]">
        <h1 className="text-[35px]">WISHLIST</h1>
        <p> TO SAVE YOUR WISHLIST HERE AND BOOK ORDER</p>
      </div>
      <div className="grid grid-cols-4 gap-8 justify-center">
      {
        data.map((ele, i) => (
          <div className="flex flex-col items-center w-[18vw] m-[1vw]" key={i}>
            <div className="flex flex-col items-center w-[18vw] m-[1vw]">
              <FontAwesomeIcon
                className="relative left-[7vw] top-5 z-30 text-[2vw]"
                icon={faXmark}
                onClick={() => { handleUnfavourite() }}
              />

              <div className="relative group">
                <img
                  className="w-[12vw] h-fit"
                  src={ele.image1}
                />
                <img
                  className="absolute w-[12vw] h-fit top-0 left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                  src={ele.image2}
                />
              </div>

              <h1 className="text-[1.5vw] text-center font-semibold" >
                {ele.productName}
              </h1>

              <span className="line-through opacity-70">
                {ele.orignalPrice}
              </span>

              <span className="text-[1.5vw] p-[5px]">${ele.sellingPrice}</span>
              <p>{ele.color.toUpperCase()} COLOR AVAILABLE </p>

              <button className="bg-black text-white w-[95%] p-[10px] rounded-lg mt-[10px] "> ADD TO CARTS </button>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  )
}