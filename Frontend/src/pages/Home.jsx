import Slider from "../components/Slider";
import HomePageCard from "../components/HomePageCard";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  const Navigate = useNavigate();

  // useEffect(()=>{
  //     handleNavSearchData('rating','4');
  // },[])

  const handleNavSearchData = async (key, value, gender) => {
    console.log("run home search");

    const response = await axios.get(
      `https://bluefly-com-clone-6ri4.onrender.com/searchData/${key}/${value}`
    );

    if(gender != "Both"){
    const data = [];
    response.data.map((ele) => {
      if (ele.gender === gender) {
        data.push(ele);
      }
    });
    Navigate("/SearchedDataPage", { state: { data } });
}
else{
    const data = response.data
    Navigate("/SearchedDataPage", { state: { data } });
}
  };

  return (
    <div className="">
      <Slider />
      <div className="border w-[93vw] m-[3vw] ">
        <h1 className="text-sm lg:text-3xl py-[3.5vw]  flex justify-center">SHOP BY</h1>
        <div className="lg:grid lg:grid-cols-4 gap-5 justify-center gap-y-20 px-[3vw] ">
          <div
            onClick={() =>
              handleNavSearchData("category", "Handbags", "Female")
            }
          >
            <HomePageCard
              url={"./image/Home/img117.webp"}
              heading={"LUXE HANDBAGS"}
            />
          </div>

          <div
            onClick={() => handleNavSearchData("category", "Shoes", "Female")}
          >
            <HomePageCard
              url={"./image/Home/img118.webp"}
              heading={"DESIGNER SHOES"}
            />
          </div>

          <div
            onClick={() =>
              handleNavSearchData("category", "Sunglasses", "Female")
            }
          >
            <HomePageCard
              url={"./image/Home/img119.webp"}
              heading={"ICONIC SUNGLASSES"}
            />
          </div>

          <div
            onClick={() =>
              handleNavSearchData("productType", "Suits", "Female")
            }
          >
            <HomePageCard
              url={"./image/Home/img120.webp"}
              heading={"WOMEN'S BLAZERS"}
            />
          </div>

          <div
            onClick={() =>
              handleNavSearchData("productType", "Dresses", "Female")
            }
          >
            <HomePageCard
              url={"./image/Home/img121.webp"}
              heading={"TRENDING DRESSES"}
            />
          </div>

          <div
            onClick={() => handleNavSearchData("productType", "Suits", "Male")}
          >
            <HomePageCard
              url={"./image/Home/img122.webp"}
              heading={"MEN'S COATS & JACKETS"}
            />
          </div>

          <div
            onClick={() => handleNavSearchData("designer", "Diesel", "Both")}
          >
            <HomePageCard
              url={"./image/Home/img123.webp"}
              heading={"Denim for Him & Her"}
            />
          </div>

          <div
            onClick={() =>
              handleNavSearchData("productType", "Sneakers", "Male")
            }
          >
            <HomePageCard
              url={"./image/Home/img124.webp"}
              heading={"MEN'S SNEAKERS"}
            />
          </div>

        </div>
      </div>
      <div className="flex justify-center">
        <img className="w-[93vw]" src="./image/Home/img125.webp" alt="image" />
      </div>

      {/* <div>
        <h1 className="text-[3vw] py-[3vw]  flex justify-center">
          NEW ARRIVALS
        </h1>
      </div>

      <div>
        <h1 className="text-[3vw] py-[3vw]  flex justify-center">
          RECOMMENDED PRODUCTS
        </h1>
      </div> */}
    </div>
  );
}
