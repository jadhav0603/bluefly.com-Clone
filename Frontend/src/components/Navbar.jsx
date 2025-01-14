import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser,faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Routes from '../components/Routes'



function Navbar() {
 const Navigate = useNavigate()

 const handleHome = ()=>{
  Navigate('/')
  console.log("run home")
 }

  return (
    <div>
      <div className="bg-black w-[98.5vw] text-[1.1vw] text-white py-3.5 flex justify-center">
        <p>FREE STANDARD SHIPPING - ANY ORDER OVER $99. SHOP NOW</p>
      </div>

      <div className="flex pt-[30px] px-[3vw]  border justify-between">
        <div className="w-[32vw] h-[100px] text-[1.6vw] text-gray-800 font-semibold pt-[68px] flex gap-[1vw]">
          <span className="hover:border-b border-black"> WOMEN </span>
          <span className="hover:border-b border-black"> MEN </span>
        </div>

        <div className="flex">
          <img className="w-[22vw] h-fit" src="./image/Home/img103.webp" onClick={()=>handleHome()} />
          <input className="w-[23vw] h-fit mx-[20px] mt-[35px] border-b border-black" type="text" />
          <FontAwesomeIcon className="relative right-12 top-6 text-[1.7vw]" icon={faMagnifyingGlass} />
        </div>

        <div className="flex gap-10 pt-[20px] text-[1.5vw]">
            <FontAwesomeIcon icon={faUser} />
            <FontAwesomeIcon icon={faBagShopping} />
        </div>
      </div> 
      
      <Routes />
      
      <div className="flex justify-center w-100vw">
        <img className="w-[94.5vw] p-[10px]" src="./image/Home/img105.webp" />
      </div>


    </div>
  );
}

export default Navbar;
