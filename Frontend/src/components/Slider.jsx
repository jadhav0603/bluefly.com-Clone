import { useState,useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const arr =[
'./image/Home/img107.webp',
'./image/Home/img109.webp',
'./image/Home/img111.webp',
'./image/Home/img113.webp',
'./image/Home/img115.webp',
'./image/Home/img117.jpg'
]


function Slider(){
    const[index, setIndex] = useState(0);

    const Navigate = useNavigate()

    useEffect(()=>{
        const interval = setInterval(()=>{
            setIndex((prev)=> (prev+1)% arr.length)
        },3000)

        return ()=> clearInterval(interval)
    },[])

    const handleData = async (key, value) => {
        const response = await axios.get(`https://bluefly-com-clone-6ri4.onrender.com/searchData/${key}/${value}`);
        console.log(response.data);
        const data = []
    
        response.data.map((ele)=>{
          if(ele.designer === "Gucci" ){
            data.push(ele)
          }
        })
    
        Navigate('/SearchedDataPage', { state: { data } })
    
      };


    return(
        <div className="flex justify-center items-center">
            <FontAwesomeIcon className="bg-white relative left-10 p-2.5 rounded-[50%] text-[1vw]" icon={faLessThan} onClick={()=>{if (index >=1) { setIndex(index-1)} else{setIndex(arr.length-1)}}} />
            <img className="w-[93vw]" src={arr[index]} onClick={()=>handleData("category", "Handbags")}/>
            <FontAwesomeIcon className="bg-white relative right-10 p-2.5 rounded-[50%] text-[1vw]" icon={faGreaterThan} onClick={()=>{if (index < arr.length-1) { setIndex(index+1)} else{setIndex(0)}}} />
        </div>

    ) 
}


export default Slider