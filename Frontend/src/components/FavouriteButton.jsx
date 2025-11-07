import { useState, useEffect, useContext } from "react"
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CountContext } from "./UseContextHook";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function FavouriteButton() {

    const { count,setCount } = useContext(CountContext)
    const [isVisible, setIsVisible] = useState(false)

    const Navigate = useNavigate()

    const token = localStorage.getItem('token')

    useEffect(() => {

        async function fetchFavorites(){
            const token = localStorage.getItem('token')
            // console.log(token)
            
            const response = await axios.get(
                "https://bluefly-com-clone-6ri4.onrender.com/addProduct/getFavouriteData",
                {
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                }
            );
            
            setCount(response.data.data.length)
            setIsVisible(response.data.data.length > 0)
        }

        fetchFavorites()
        
        if(count == 0){
            setIsVisible(false)
        }

        if(!token){
            setIsVisible(false)
        }

    }, [count,token])

    

    return (
        <div onClick={()=>Navigate('/FavouritePage')}>
            {
                (isVisible) ? <div className="fixed right-10 top-14 z-[1000] rounded-[50%]">
                    <div className="bg-black w-fit text-white py-[20px] px-[20px] rounded-[50%] text-[1.5vw] flex justify-center shadow-lg ">
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <span
                        className="bg-gray-500 h-fit text-sm px-[3px] rounded-[50%] relative bottom-8 left-4"
                    >{count}</span>
                </div> : " "
            }
        </div>
    )
}