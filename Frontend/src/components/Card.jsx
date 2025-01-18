import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import FilterPanel from "./FilterPanel";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ response }) {
    const Navigate = useNavigate()

    const [filters, setFilters] = useState({
      brand: null,
      gender: null,
      percentOff: null,
      color: null,
      price: { from: null, to: null },
      size: null,
    });
  
    const filteredData = response.filter((ele) => {
      const matchesBrand = !filters.brand || ele.designer === filters.brand;
      const matchesGender = !filters.gender || ele.gender === filters.gender;
      const matchesPercentOff =
        !filters.percentOff ||
        (ele.discount >= parseInt(filters.percentOff.split(" ")[0]) &&
          ele.discount <= parseInt(filters.percentOff.split(" ")[2]));
      const matchesColor = !filters.color || ele.color === filters.color;
      const matchesPrice =
        (!filters.price.from || ele.sellingPrice >= filters.price.from) &&
        (!filters.price.to || ele.sellingPrice <= filters.price.to);
      const matchesSize = !filters.size || ele.size === parseInt(filters.size);
  
      return (
        matchesBrand &&
        matchesGender &&
        matchesPercentOff &&
        matchesColor &&
        matchesPrice &&
        matchesSize
      );
    });

    function handleCard(ele){
      Navigate("/SelectedProduct", {state:ele})
    }
  
    return (
      <div className="w-[94vw] flex justify-around " >
        <div>
          <FilterPanel filters={filters} setFilters={setFilters} response={response} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
          {filteredData.length > 0 ? (
            filteredData.map((ele, i) => (
              <div className="w-[14vw] m-[1vw]" key={ele.id} onClick={()=> handleCard(ele)}>
                <div className="relative group">
                  <img className="w-[12vw] h-fit" src={ele.image1} />
                  <img
                    className="absolute w-[12vw] h-fit top-0 left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                    src={ele.image2}
                  />
                </div>
                <FontAwesomeIcon
                  className="text-[1.5vw] relative left-[11vw] bottom-[1vw]"
                  icon={faHeart}
                />
                <h1 className="text-[1.5vw]">{ele.productName}</h1>
                <span className="line-through opacity-70">${ele.orignalPrice}</span>
                <span className="text-[1.5vw] p-[5px]">${ele.sellingPrice}</span>
                <p>{ele.color.toUpperCase()} COLOR AVAILABLE</p>
              </div>
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </div>
    );
  }
