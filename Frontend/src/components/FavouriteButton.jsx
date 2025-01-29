import { useState, useEffect, useContext } from "react"
import { faHeart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CountContext } from "./UseContextHook";


export default function FavouriteButton(){

    const {count} = useContext(CountContext)
    
    const [isVisible, setIsVisible] = useState(false)
  

    useEffect(()=>{
       setIsVisible(count > 0)
    //    console.log("favourite button is ",isVisible)
    },[count])

    return(
        <div>
        {
            (isVisible)? <div className="fixed right-10 top-14 z-[1000] rounded-[50%]">
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