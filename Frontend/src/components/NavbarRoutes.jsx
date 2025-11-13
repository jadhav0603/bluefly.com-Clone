import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


const shoesBrands = [
  "Nike", "Adidas", "Puma", "Reebok", "Converse", "Vans", "Timberland", "Dr. Martens",
  "Christian Louboutin", "Gucci", "Valentino"
]

const shoesAdjectives = [
  "Stylish", "Comfortable", "Trendy", "Elegant", "Classic", "Casual", "Formal", "Sporty",
  "Chic", "Modern"
]

const shoesProductTypes = [
  "Platform Pumps", "Sneakers", "Sandals", "Boots", "Heels", "Flats", "Loafers", "Wedges",
  "Running Shoes", "Slip-ons"
]

const clothingBrands = [
  "H&M", "Zara", "Levi's", "Ralph Lauren", "Tommy Hilfiger", "Calvin Klein", "Diesel",
  "Armani", "Dolce & Gabbana", "Prada"
];

const clothingAdjectives = [
  "Casual", "Formal", "Trendy", "Elegant", "Comfortable", "Chic", "Vintage", "Modern",
  "Stylish", "Classy"
];

const clothingProductTypes = [
  "Dresses", "T-Shirts", "Jackets", "Blouses", "Jeans", "Skirts", "Sweaters", "Coats",
  "Suits", "Pants"
];

const handbagBrands = [
  "Michael Kors", "Louis Vuitton", "Coach", "Kate Spade", "Prada", "Gucci", "Fendi",
  "Tory Burch", "Bottega Veneta", "Marc Jacobs"
];

const handbagAdjectives = [
  "Stylish", "Elegant", "Chic", "Modern", "Casual", "Luxurious", "Trendy", "Classic",
  "Vintage", "Fashionable"
];

const handbagProductTypes = [
  "Tote Bags", "Shoulder Bags", "Clutches", "Crossbody Bags", "Satchels", "Backpacks",
  "Messenger Bags", "Hobo Bags", "Duffel Bags", "Wallets"
];

const sunglassesBrands = [
  "Ray-Ban", "Oakley", "Prada", "Versace", "Gucci", "Tom Ford", "Maui Jim", "Chanel",
  "Dior", "Persol"
];

const sunglassesAdjectives = [
  "Stylish", "Classic", "Trendy", "Modern", "Chic", "Retro", "Polarized", "Oversized",
  "Round", "Cat-Eye"
];

const sunglassesProductTypes = [
  "Aviator Sunglasses", "Round Sunglasses", "Cat-Eye Sunglasses", "Wayfarer Sunglasses",
  "Oversized Sunglasses", "Sports Sunglasses", "Optical Sunglasses", "Mirrored Sunglasses",
  "Retro Sunglasses", "Designer Sunglasses"
];

const jewelryBrands = [
  "Tiffany & Co.", "Cartier", "Bulgari", "Pandora", "Chopard", "Swarovski", "Van Cleef & Arpels",
  "Harry Winston", "David Yurman", "Mikimoto"
];

const jewelryAdjectives = [
  "Elegant", "Luxury", "Trendy", "Classic", "Stylish", "Modern", "Vintage", "Dazzling",
  "Sparkling", "Chic"
];

const jewelryProductTypes = [
  "Necklaces", "Bracelets", "Earrings", "Rings", "Pendants", "Brooches", "Watches", "Anklets",
  "Cufflinks", "Chains"
];


const allBrands = [
  "Nike", "Adidas", "Puma", "Reebok", "Converse", "Vans", "Timberland", "Dr. Martens",
  "Christian Louboutin", "Gucci", "Valentino",
  "H&M", "Zara", "Levi's", "Ralph Lauren", "Tommy Hilfiger", "Calvin Klein", "Diesel",
  "Armani", "Dolce & Gabbana", "Prada",
  "Michael Kors", "Louis Vuitton", "Coach", "Kate Spade", "Prada", "Gucci", "Fendi",
  "Tory Burch", "Bottega Veneta", "Marc Jacobs",
  "Ray-Ban", "Oakley", "Prada", "Versace", "Gucci", "Tom Ford", "Maui Jim", "Chanel",
  "Dior", "Persol",
  "Tiffany & Co.", "Cartier", "Bulgari", "Pandora", "Chopard", "Swarovski", "Van Cleef & Arpels",
  "Harry Winston", "David Yurman", "Mikimoto"
];


function Routes() {
  const Navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)

  const handleNavSearchData = async (key, value, productCategory) => {
    setIsLoading(true)
    const response = await axios.get(`https://bluefly-com-clone-6ri4.onrender.com/searchData/${key}/${value}`);
    console.log(response.data);
    const data = []

    response.data.map((ele)=>{
      if(ele.category === productCategory || productCategory === "allData"){
        data.push(ele)
      }
    })

    setIsLoading(false)

    Navigate('/SearchedDataPage', { state: { isLoading, data} })

  };


  (isLoading)


  return (
    <div className="flex flex-col flex-wrap justify-center uppercase ">
      <ul className="text-xs lg:text-lg flex flex-wrap justify-center gap-[4vw] font-semibold p-[2vw] text-gray-800">
        <li className="relative group">
          <div className="">DESIGNERS</div>

          <div className="z-10 bg-white w-[88vw] flex flex-col p-[2vw] shadow-2xl 
    fixed inset-x-0 mx-auto w-[88vw]
    opacity-0 invisible group-hover:opacity-100 group-hover:visible
    transition-all ease-out duration-500">
            <h1 className="py-[10px]">Featured Designers</h1>
            <ul className="flex flex-wrap">
              {allBrands.map((brand, index) => (
                <li
                  key={index}
                  className="hover:text-green-500 text-xs lg:text-sm cursor-pointer w-[20vw] overflow-hidden"
                  onClick={() => handleNavSearchData("designer", brand, "allData")}
                >
                  {brand}
                </li>
              ))}
            </ul>
          </div>
        </li>



        <li className="relative group">
          <div className="">CLOTHING</div>

          <div className="z-10 bg-white w-[88vw] flex flex-col p-[2vw] shadow-2xl 
    fixed inset-x-0 mx-auto w-[88vw]
    opacity-0 invisible group-hover:opacity-100 group-hover:visible
    transition duration-500">
            <h1 className="py-[10px]">Featured Designers</h1>
            <h1 
              className="hover:text-green-500 cursor-pointer w-[20vw] text-xs lg:text-sm"
              onClick={() => handleNavSearchData("category", "Clothing", "allData")}
            >See ALL</h1>
            <div className="flex text-xs lg:text-sm">
              <ul className="">
                {clothingBrands.map((brand, index) => (
                    <li
                    key={index}
                    className="hover:text-green-500 cursor-pointer w-[20vw] overflow-hidden"
                    onClick={() => handleNavSearchData("designer", brand, "Clothing")}
                  >
                    {brand}
                  </li> 
                
                ))}
              </ul>

              <ul>
                {clothingAdjectives.map((brand, index) => (
                  <li
                    key={index}
                    className="hover:text-green-500 cursor-pointer w-[20vw] overflow-hidden"
                    onClick={() => handleNavSearchData("adjective", brand, "Clothing")}
                  >
                    {brand}
                  </li>
                ))}
              </ul>


              <ul>
                {clothingProductTypes.map((brand, index) => (
                  <li
                    key={index}
                    className="hover:text-green-500 cursor-pointer w-[20vw]"
                    onClick={() => handleNavSearchData("productType", brand, "Clothing")}
                  >
                    {brand}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </li>



        <li className="relative group">
          <div className="">SHOES</div>

          <div className="z-10 bg-white w-[88vw] flex flex-col p-[2vw] shadow-2xl 
    fixed inset-x-0 mx-auto w-[88vw]
    opacity-0 invisible group-hover:opacity-100 group-hover:visible
    transition duration-500">
            <h1 className="py-[10px]">Featured Designers</h1>
            <h1 
              className="hover:text-green-500 cursor-pointer w-[20vw] text-xs lg:text-sm"
              onClick={() => handleNavSearchData("category", "Shoes", "allData")}
            >See ALL</h1>
            <div className="flex gap-5 text-xs lg:text-sm">
              <ul className="">
                {shoesBrands.map((brand, index) => (
                  <li
                    key={index}
                    className="hover:text-green-500 cursor-pointer w-[20vw]"
                    onClick={() => handleNavSearchData("designer", brand, "Shoes")}
                  >
                    {brand}
                  </li>
                ))}
              </ul>

              <ul>
                {shoesAdjectives.map((brand, index) => (
                  <li
                    key={index}
                    className="hover:text-green-500 cursor-pointer w-[20vw]"
                    onClick={() => handleNavSearchData("adjective", brand, "Shoes")}
                  >
                    {brand}
                  </li>
                ))}
              </ul>


              <ul>
                {shoesProductTypes.map((brand, index) => (
                  <li
                    key={index}
                    className="hover:text-green-500 cursor-pointer w-[20vw]"
                    onClick={() => handleNavSearchData("productType", brand, "Shoes")}
                  >
                    {brand}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </li>



        <li className="relative group">
          <div className="">SUNGLASSES</div>

          <div className="z-10 bg-white w-[88vw] flex flex-col p-[2vw] shadow-2xl 
    fixed inset-x-0 mx-auto w-[88vw]
    opacity-0 invisible group-hover:opacity-100 group-hover:visible
    transition duration-500">
            <h1 className="py-[10px]">Featured Designers</h1>
            <h1 
              className="hover:text-green-500 cursor-pointer w-[20vw] text-xs lg:text-sm"
              onClick={() => handleNavSearchData("category", "Sunglasses", "allData")}
            >See ALL</h1>
            <div className="flex gap-5 text-xs lg:text-sm">
              <ul className="">
                {sunglassesBrands.map((brand, index) => (
                  <li
                    key={index}
                    className="hover:text-green-500 cursor-pointer w-[20vw]"
                    onClick={() => handleNavSearchData("designer", brand, "Sunglasses")}
                  >
                    {brand}
                  </li>
                ))}
              </ul>

              <ul>
                {sunglassesAdjectives.map((brand, index) => (
                  <li
                    key={index}
                    className="hover:text-green-500 cursor-pointer w-[20vw]"
                    onClick={() => handleNavSearchData("adjective", brand, "Sunglasses")}
                  >
                    {brand}
                  </li>
                ))}
              </ul>


              <ul>
                {sunglassesProductTypes.map((brand, index) => (
                  <li
                    key={index}
                    className="hover:text-green-500 cursor-pointer w-[20vw]"
                    onClick={() => handleNavSearchData("productType", brand, "Sunglasses")}
                  >
                    {brand}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </li>



        <li className="relative group">
          <div className="">HANDBAGS</div>

          <div className="z-10 bg-white w-[88vw] flex flex-col p-[2vw] shadow-2xl 
    fixed inset-x-0 mx-auto w-[88vw]
    opacity-0 invisible group-hover:opacity-100 group-hover:visible
    transition duration-500">
            <h1 className="py-[10px]">Featured Designers</h1>
            <h1 
              className="hover:text-green-500 cursor-pointer w-[20vw] text-xs lg:text-sm"
              onClick={() => handleNavSearchData("category", "Handbags", "allData")}
            >See ALL</h1>
            <div className="flex gap-5 text-xs lg:text-sm">
              <ul className="">
                {handbagBrands.map((brand, index) => (
                  <li
                    key={index}
                    className="hover:text-green-500 cursor-pointer w-[20vw]"
                    onClick={() => handleNavSearchData("designer", brand, "Handbags")}
                  >
                    {brand}
                  </li>
                ))}
              </ul>

              <ul>
                {handbagAdjectives.map((brand, index) => (
                  <li
                    key={index}
                    className="hover:text-green-500 cursor-pointer w-[20vw]"
                    onClick={() => handleNavSearchData("adjective", brand,"Handbags")}
                  >
                    {brand}
                  </li>
                ))}
              </ul>


              <ul>
                {handbagProductTypes.map((brand, index) => (
                  <li
                    key={index}
                    className="hover:text-green-500 cursor-pointer w-[20vw]"
                    onClick={() => handleNavSearchData("productType", brand,"Handbags")}
                  >
                    {brand}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </li>


        <li className="relative group">
          <div className="">JEWELRY</div>

          <div className="z-10 bg-white w-[88vw] flex flex-col p-[2vw] shadow-2xl 
    fixed inset-x-0 mx-auto w-[88vw]
    opacity-0 invisible group-hover:opacity-100 group-hover:visible
    transition duration-500">
            <h1 className="py-[10px]">Featured Designers</h1>
            <h1 
              className="hover:text-green-500 cursor-pointer w-[20vw] text-sm"
              onClick={() => handleNavSearchData("category", "Jewelry", "allData")}
            >See ALL</h1>
            <div className="flex text-xs lg:text-sm gap-5">
              <ul className="">
                {jewelryBrands.map((brand, index) => (
                  <li
                    key={index}
                    className="hover:text-green-500 cursor-pointer w-[20vw]"
                    onClick={() => handleNavSearchData("designer", brand,"Jewelry")}
                  >
                    {brand}
                  </li>
                ))}
              </ul>

              <ul>
                {jewelryAdjectives.map((brand, index) => (
                  <li
                    key={index}
                    className="hover:text-green-500 cursor-pointer w-[20vw]"
                    onClick={() => handleNavSearchData("adjective", brand, "Jewelry")}
                  >
                    {brand}
                  </li>
                ))}
              </ul>


              <ul>
                {jewelryProductTypes.map((brand, index) => (
                  <li
                    key={index}
                    className="hover:text-green-500 cursor-pointer w-[20vw]"
                    onClick={() => handleNavSearchData("productType", brand, "Jewelry")}
                  >
                    {brand}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </li>


        {/* <li>ACCESSORIES</li> */}


        <li className="relative group">
          <div className="">UNDER $500</div>

          <div className="z-10 bg-white text-xs lg:text-sm flex flex-col lg:p-[2vw] shadow-2xl absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-500 ">
            <ul className="">
              <li
                className="hover:text-green-500 cursor-pointer "
                // onClick={() => handleNavSearchData("sellingPrice", "500", "allData")}
                // onClick={() => handleNavSearchData("sellingPrice","500", "allData" )}
              >
                <div className="flex justify-center item-center text-xs lg:text-sm">
                  <FontAwesomeIcon className="flex justify-center mt-[15px] m-[10px]" icon={faLessThan} /> 
                  <span> SHOP BY PRICEPOINT </span> 
                </div>
              </li>

              <li
                className="hover:text-green-500 cursor-pointer"
                // onClick={() => handleNavSearchData(" ", )}
              >
                <div className="flex justify-center item-center text-xs lg:text-sm">
                  <FontAwesomeIcon className="flex justify-center mt-[15px] m-[10px]" icon={faLessThan} /> 
                  <span> SHOP BY CATEGORY </span> 
                </div>
              </li>

            </ul>
          </div>
      </li>

  
  
      <li className="relative group">
          <div className="">CLEARANCE</div>

          <div className="z-10 bg-white flex flex-col p-[2vw] shadow-xl absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-500 ">
            <ul className="">
              <li
                className="hover:text-green-500 cursor-pointer flex justify-center text-xs lg:text-sm"
                onClick={() => handleNavSearchData("gender","Female","allData")}
              >
                WOMEN'S 
              </li>

              <li
                className="hover:text-green-500 cursor-pointer flex justify-center text-xs lg:text-sm"
                onClick={() => handleNavSearchData("gender", "Male", "allData")}
              >
              MEN'S
              </li>

            </ul>
          </div>
      </li>
    </ul>
    </div >
  );
}

export default Routes;
