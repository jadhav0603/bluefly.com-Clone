import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const LinkArr = [
  {
    to: "/Shipping & Delivery",
    lable: "Shipping & Delivery",
  },
  {
    to: "/Returns & Exchanges ",
    lable: "Returns & Exchanges",
  },
  {
    to: "/Start a Return ",
    lable: "Start a Return ",
  },
  {
    to: "/Shop Pay Installments ",
    lable: "Shop Pay Installments ",
  },
  {
    to: "/Contact Us ",
    lable: "Contact Us",
  },
  {
    to: "/Leave us Feedback",
    lable: "Leave us Feedback",
  },
  {
    to: "/Sell on Bluefly",
    lable: "Sell on Bluefly",
  },
  {
    to: "/Terms & Conditions",
    lable: "Terms & Conditions",
  },
  {
    to: "/Privacy Policy",
    lable: "Privacy Policy",
  },
  {
    to: "/Do Not Sell My Personal Information",
    lable: "Do Not Sell My Personal Information",
  },
  {
    to: "/HTML Sitemap",
    lable: "HTML Sitemap",
  },
];

export default function Footer() {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div className="border flex flex-col justify-center">
      <div className="p-[3vw] lg:flex gap-10 text-sm lg:text-lg">
        <div className="w-[31.3vw] ">
          <p>FOLLOW US</p>
          <div className="w-[15vw] lg:w-[3vw] flex gap-3 py-[20px]">
            <img
              className="rounded relative hover:bottom-1 cursor-pointer"
              src="./image/Home/facebook.webp"
              alt="facbook"
            />
            <img
              className="relative hover:bottom-1 cursor-pointer"
              src="./image/Home/img104.webp"
              alt="instagram"
            />
          </div>
        </div>

        <div className="lg:w-[31.3vw]">
          <h1 className="text-sm lg:text-lg">HELP</h1>
          <div className="py-[15px]">
            {LinkArr.map((ele) => (
              <Link className="flex uppercase text-xs lg:text-sm hover:border-b border-black w-fit" key={ele.to} to={ele.to}>
                {ele.lable}
              </Link>
            ))}
          </div>
        </div>

        <div className="lg:w-[31.3vw]">
          <h1 className="text-sm lg:text-lg ">NEWSLETTER</h1>
          <div className="py-[15px]">
            <p className="flex flex-wrap uppercase text-xs lg:text-sm">
              Promotions, new products, and sales. Directly to your inbox.
            </p>
            <div className="mt-[5px] relative">
              <p
                className={`absolute left-0 ${
                  isFocus ? "top[-10px] text-sm transition-all duration-500" : "top-5 text-sm lg:text-lg transition-all duration-500"
                }`}
              >
                EMAIL
              </p>
              <input
                type="text"
                className="focus:outline-none border-b border-black lg:w-[25vw] pt-6"
                onFocus={() => setIsFocus(true)}
                onBlur={(e) => !e.target.value && setIsFocus(false)}
              />
              <FontAwesomeIcon
                className="cursor-pointer relative right-7 text-sm"
                icon={faArrowRight}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-[98vw] pb-[50px]">
        <img className="lg:w-[30vw]" src="./image/Home/footerCards.png" />
        <p className="opacity-[50%] text-xs lg:text-sm">© 2025, Bluefly Powered by Vijay Jadhav.</p>
      </div>
    </div>
  );
}
