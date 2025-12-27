import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import NavbarRoutes from "../components/NavbarRoutes";
import axios from "axios";
import { useState } from "react";

function Navbar() {
  const [inputVal, setInputVal] = useState();
  const [isLoading, setIsLoading] = useState(false)

  const Navigate = useNavigate();

  const handleNavSearchData = async () => {
    setIsLoading(true)
    const response = await axios.get(
      `https://bluefly-com-clone-6ri4.onrender.com/${inputVal}`
    );
    // console.log(response.data);
    const data = [];

    for (let i = 0; i < response.data.length; i++) {
      for (let j = 0; j < response.data[i].data.length; j++) {
        data.push(response.data[i].data[j]);
      }
    }

    setIsLoading(false)
    // console.log("data array = ",data)

    Navigate("/SearchedDataPage", { state: { isLoading,data } });

    setInputVal("");
  };

  const filterNavSearchData = async (key, value, productCategory) => {
    const response = await axios.get(
      `https://bluefly-com-clone-6ri4.onrender.com/searchData/${key}/${value}`
    );
    // console.log(response.data);
    const data = [];

    response.data.map((ele) => {
      if (ele.category === productCategory || productCategory === "allData") {
        data.push(ele);
      }
    });

    Navigate("/SearchedDataPage", { state: { data } });
  };

  const handleHome = () => {
    Navigate("/");
    // console.log("run home")
  };

  const handleLogin = () => {
    //  console.log("run login")
    Navigate("/LoginModel");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleNavSearchData();
    }
  };

  return (
    <div >
      <div className="bg-black text-xs lg:text-lg text-white py-3.5 flex justify-center">
        <p>FREE STANDARD SHIPPING - ANY ORDER OVER $99. SHOP NOW</p>
      </div>

      <div className="flex flex-col px-[3vw] border justify-between">
        
        <div className="flex flex-col w-full lg:flex-row justify-around text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 font-semibold gap-[2vw] md:gap-[1vw]">
          
          <div className="m-auto p-2 lg:mr-[1vw]">
            <img
              className="w-[50vw] lg:w-[22vw] h-fit cursor-pointer"
              src="./image/Home/img103.webp"
              onClick={() => handleHome()}
            />
          </div>

          <div className="flex w-full pb-5 lg:w-[35vw] justify-around  p-0 m-0">
            <div className="flex items-center">
              <input
                type="text"
                className="w-[60vw] lg:w-[23vw] lg:mx-[20px] mt-[35px] border-b border-black focus:outline-none"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <FontAwesomeIcon
                className="relative cursor-pointer right-5 lg:right-10 top-3 text-sm lg:text-xl"
                onClick={() => handleNavSearchData()}
                icon={faMagnifyingGlass}
              />
            </div>

            <div className="flex cursor-pointer gap-5 lg:gap-10 text-lg lg:text-xl mt-8">
              <FontAwesomeIcon icon={faUser} onClick={() => handleLogin()} />
              <FontAwesomeIcon
                icon={faBagShopping}
                onClick={() => Navigate("/AddCarts")}
              />
            </div>
          </div>
        </div>

        <div className="flex lg:text-2xl text-sm lg:font-semibold gap-3">
          <span
            className="hover:border-b border-black cursor-pointer"
            onClick={() => filterNavSearchData("gender", "Female", "allData")}
          >
            WOMEN
          </span>
          <span
            className="hover:border-b border-black cursor-pointer"
            onClick={() => filterNavSearchData("gender", "Male", "allData")}
          >
            MEN
          </span>
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
