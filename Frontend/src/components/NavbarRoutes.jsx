import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";


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

  const handleNavSearchData = async (key, value) => {
    const response = await axios.get(`http://localhost:3000/searchData/${key}/${value}`);
    console.log(response.data);
    const data = response.data

    Navigate('/SearchedDataPage', { state: { data } })

  };





  return (
    <div className="w-[98vw] flex flex-col justify-center uppercase ">
      <ul className="text-[1.5vw] flex flex-wrap justify-center  gap-[4vw] font-semibold text-[1.5vw] p-[2vw] w-[98vw] text-gray-800">
        <li className="relative group">
          <div className="">DESIGNERS</div>

          <div className="z-10 bg-white w-[96vw] flex flex-col p-[2vw] text-[1vw] shadow-xl absolute top-6 left-[-4vw] m-0 left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-500 ">
            <h1 className="py-[10px]">Featured Designers</h1>
            <ul className="flex flex-wrap">
              {allBrands.map((brand, index) => (
                <li
                  key={index}
                  className="hover:text-green-500 cursor-pointer w-[20vw]"
                  onClick={() => handleNavSearchData("designer", brand)}
                >
                  {brand}
                </li>
              ))}
            </ul>
          </div>
        </li>




        <li className="relative group">
          <div className="">CLOTHING</div>

          <div className="z-10 bg-white w-[96vw] flex flex-col p-[2vw] text-[1vw] shadow-xl absolute top-6 left-[-15.7vw] m-0 left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-500 ">
            <h1 className="py-[10px]">Featured Designers</h1>
            <div className="flex">
              <ul className="">
                {clothingBrands.map((brand, index) => (
                  <li
                    key={index}
                    className="hover:text-green-500 cursor-pointer w-[20vw]"
                    onClick={() => handleNavSearchData("designer", brand)}
                  >
                    {brand}
                  </li>
                ))}
              </ul>

              <ul>
                {clothingAdjectives.map((brand, index) => (
                  <li
                    key={index}
                    className="hover:text-green-500 cursor-pointer w-[20vw]"
                    onClick={() => handleNavSearchData("adjective", brand)}
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
                    onClick={() => handleNavSearchData("productType", brand)}
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

          <div className="z-10 bg-white w-[96vw] flex flex-col p-[2vw] text-[1vw] shadow-xl absolute top-6 left-[-26.8vw] m-0 left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-500 ">
            <h1 className="py-[10px]">Featured Designers</h1>
            <div className="flex">
              <ul className="">
                {shoesBrands.map((brand, index) => (
                  <li
                    key={index}
                    className="hover:text-green-500 cursor-pointer w-[20vw]"
                    onClick={() => handleNavSearchData("designer", brand)}
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
                    onClick={() => handleNavSearchData("adjective", brand)}
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
                    onClick={() => handleNavSearchData("productType", brand)}
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

          <div className="z-10 bg-white w-[96vw] flex flex-col p-[2vw] text-[1vw] shadow-xl absolute top-6 left-[-35.6vw] m-0 left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-500 ">
            <h1 className="py-[10px]">Featured Designers</h1>
            <div className="flex">
              <ul className="">
                {handbagBrands.map((brand, index) => (
                  <li
                    key={index}
                    className="hover:text-green-500 cursor-pointer w-[20vw]"
                    onClick={() => handleNavSearchData("designer", brand)}
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
                    onClick={() => handleNavSearchData("adjective", brand)}
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
                    onClick={() => handleNavSearchData("productType", brand)}
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

          <div className="z-10 bg-white w-[96vw] flex flex-col p-[2vw] text-[1vw] shadow-xl absolute top-6 left-[-47.6vw] m-0 left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-500 ">
            <h1 className="py-[10px]">Featured Designers</h1>
            <div className="flex">
              <ul className="">
                {jewelryBrands.map((brand, index) => (
                  <li
                    key={index}
                    className="hover:text-green-500 cursor-pointer w-[20vw]"
                    onClick={() => handleNavSearchData("designer", brand)}
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
                    onClick={() => handleNavSearchData("adjective", brand)}
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
                    onClick={() => handleNavSearchData("productType", brand)}
                  >
                    {brand}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </li>


        <li>ACCESSORIES</li>


        <li className="relative group">
          <div className="">UNDER $50</div>

          <div className="z-10 bg-white w-[12vw] flex flex-col p-[2vw] text-[1vw] shadow-xl absolute top-6 left-[-2vw] m-0 left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-500 ">
            <ul className="">
              <li
                className="hover:text-green-500 cursor-pointer"
                onClick={() => handleNavSearchData(" ", )}
              >
                <div className="flex justify-center item-center w-[7vw]">
                  <FontAwesomeIcon className="flex justify-center mt-[15px] m-[10px]" icon={faLessThan} /> 
                  <span> SHOP BY PRICEPOINT </span> 
                </div>
              </li>

              <li
                className="hover:text-green-500 cursor-pointer"
                onClick={() => handleNavSearchData(" ", )}
              >
                <div className="flex justify-center item-center w-[7vw]">
                  <FontAwesomeIcon className="flex justify-center mt-[15px] m-[10px]" icon={faLessThan} /> 
                  <span> SHOP BY CATEGORY </span> 
                </div>
              </li>

            </ul>
          </div>
      </li>

  
  
      <li className="relative group">
          <div className="">CLEARANCE</div>

          <div className="z-10 bg-white w-[10vw] flex flex-col  p-[2vw] text-[1vw] shadow-xl absolute top-6 left-[-1vw] m-0 left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-500 ">
            <ul className="">
              <li
                className="hover:text-green-500 cursor-pointer flex justify-center"
                onClick={() => handleNavSearchData("gender","Female")}
              >
                WOMEN'S 
              </li>

              <li
                className="hover:text-green-500 cursor-pointer flex justify-center"
                onClick={() => handleNavSearchData("gender", "Male")}
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
