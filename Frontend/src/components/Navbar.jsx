import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser,faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import NavbarRoutes from '../components/NavbarRoutes'
import axios from "axios";
import { useState } from "react";


function Navbar() {

  const [inputVal,setInputVal] = useState()

 const Navigate = useNavigate()

 const handleNavSearchData = async () => {
  const response = await axios.get(`https://bluefly-com-clone-6ri4.onrender.com/${inputVal}`);
  console.log(response.data);
  const data = []

  for(let i=0; i<response.data.length; i++){
    for(let j=0; j<response.data[i].data.length; j++){
      data.push(response.data[i].data[j])
    }
  }

  // console.log("data array = ",data)

  Navigate('/SearchedDataPage', { state: { data } })

};


const filterNavSearchData = async (key, value, productCategory) => {
  const response = await axios.get(`https://bluefly-com-clone-6ri4.onrender.com/searchData/${key}/${value}`);
  console.log(response.data);
  const data = []

  response.data.map((ele)=>{
    if(ele.category === productCategory || productCategory === "allData"){
      data.push(ele)
    }
  })

  Navigate('/SearchedDataPage', { state: { data } })

};

 
 const handleHome = ()=>{
  Navigate('/')
  // console.log("run home")
 }

 const handleLogin = ()=>{
  //  console.log("run login")
  Navigate('/Login')
 }



  return (
    <div>
      <div className="bg-black w-[98.7vw] text-[1.1vw] text-white py-3.5 flex justify-center">
        <p>FREE STANDARD SHIPPING - ANY ORDER OVER $99. SHOP NOW</p>
      </div>

      <div className="flex pt-[30px] px-[3vw]  border justify-between">
        <div className="w-[32vw] h-[100px] text-[1.6vw] text-gray-800 font-semibold pt-[68px] flex gap-[1vw]">
          <span className="hover:border-b border-black" onClick={() => filterNavSearchData("gender","Female","allData")}> WOMEN </span>
          <span className="hover:border-b border-black" onClick={() => filterNavSearchData("gender","Male","allData")} > MEN </span>
        </div>

        <div className="flex">
          <img className="w-[22vw] h-fit" src="./image/Home/img103.webp" onClick={()=>handleHome()} />
          <input 
            className="w-[23vw] h-fit mx-[20px] mt-[35px] border-b border-black focus:outline-none" 
            value={inputVal}
            
            onChange={(e)=>setInputVal(e.target.value)}
            type="text" />
          <FontAwesomeIcon className="relative right-12 top-6 text-[1.7vw]" 
          onClick={()=>handleNavSearchData()}
          icon={faMagnifyingGlass} />
        </div>

        <div className="flex gap-10 pt-[20px] text-[1.5vw]">
            <FontAwesomeIcon icon={faUser} onClick={()=>handleLogin()} />
            <FontAwesomeIcon icon={faBagShopping} />
        </div>
      </div> 
      
      <NavbarRoutes />
      
      <div className="flex justify-center w-100vw">
        <img className="w-[94.5vw] p-[10px]" src="./image/Home/img105.webp" />
      </div>


    </div>
  );
}

export default Navbar;
