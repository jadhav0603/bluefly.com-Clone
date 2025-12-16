import { useState, useEffect,useContext } from "react"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { CountContext } from "../components/UseContextHook";
import { useNavigate } from "react-router-dom";

export default function FavouritePage() {
  const [data, setData] = useState([])
  const { count,setCount } = useContext(CountContext)

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchFavorites() {
      try {
        const token = localStorage.getItem('token')
        // console.log(token)

        const response = await axios.get(
          "https://bluefly-com-clone-6ri4.onrender.com/addProduct/getFavouriteData",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        // console.log(response.data.data);
        setData(response.data.data);

      }
      catch (error) {
        console.error("Error fetching favorites page data:", error);
      }
    }
    fetchFavorites();
  }, []);




  const handleUnfavourite = async (productId) => {
    const token = localStorage.getItem("token");
    // console.log("token from deleteFav = ",token)
    try {
        await axios.delete("https://bluefly-com-clone-6ri4.onrender.com/deleteFav", {
        data: { productId: productId },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      setData((prevData) => prevData.filter((items)=>items._id !== productId))
     
    } catch (error) {
      console.error("Delete failed:", error.response?.data || error.message);
    }
  };


  useEffect(()=>{
    setCount(data.length)
  },[data])



  const handleCarts = async (ele)=>{
    const token = localStorage.getItem('token')
    console.log('token = ', token)
    try {
      const response = await axios.post(
        'https://bluefly-com-clone-6ri4.onrender.com/handleCarts/addToCart',
        ele,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
      
        handleUnfavourite(ele._id)
        setData((prevData) => prevData.filter((items)=>items._id !== ele._id))
        navigate('/AddCarts')

    } catch (error) {
      console.log("carts errors = ", error.message)
    }
    
  }



  return (
    <div className="w-[90vw] m-auto">
      <div className="flex flex-col items-center p-[20px]">
        <h1 className="text-2xl pb-[20px]">WISHLIST</h1>
        <p className="text-sm lg:text-lg"> TO SAVE YOUR WISHLIST HERE AND BOOK ORDER</p>
      </div>
      <div className="lg:grid lg:grid-cols-4 gap-8 flex flex-wrap justify-center">
      {
        data.map((ele, i) => (
          <div className="flex flex-col items-center lg:w-[18vw] w-full m-[1vw]" key={i}>
            {/* <div className="flex flex-col items-center w-[18vw] m-[1vw]"> */}
              <FontAwesomeIcon
                className="relative left-[7vw] top-5 z-30 text-lg"
                icon={faXmark}
                onClick={() => handleUnfavourite(ele._id) }
              />

              <div className="relative group">
                <img
                  className="lg:w-[12vw] h-fit"
                  src={ele.image1}
                />
                <img
                  className="absolute lg:w-[12vw] h-fit top-0 left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                  src={ele.image2}
                />
              </div>

              <h1 className="text-lg text-center font-semibold" >
                {ele.productName}
              </h1>

              <span className="line-through opacity-70 text-lg">
                {ele.orignalPrice}
              </span>

              <span className="text-sm p-[5px]">${ele.sellingPrice}</span>
              <p className="text-sm p-[5px]">{ele.color.toUpperCase()} COLOR AVAILABLE </p>

              <button className="bg-black text-white lg:w-[95%] w-[30vw] p-[10px] rounded-lg mt-[10px] " onClick={()=>handleCarts(ele)}> ADD TO CARTS </button>
            {/* </div> */}
          </div>
        ))
      }
      </div>
    </div>
  )
}