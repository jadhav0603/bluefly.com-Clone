import { useLocation } from "react-router-dom";
import { useState } from "react";
import FilterPanel from "../components/FilterPanel";
import Card from "../components/Card";

export default function SearchedDataPage() {
  const location = useLocation();
  const { isLoading, data } = location.state || {};
  
  // Centralized state for filters and filtered data
  const [filters, setFilters] = useState({
    brand: null,
    gender: null,
    percentOff: null,
    color: null,
    price: { from: null, to: null },
    size: null,
  });

  const filteredData = data.filter((ele) => {
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


  return (
    (isLoading) ? <div>Loading....</div> :
    <div>
      <h1 className="W-[98vw] text-2xl lg:text-4xl uppercase flex justify-center p-[2vw]">
        DESIGNER {data[0]?.category}
      </h1>
      <div className="lg:flex p-[3vw] gap-10 md:flex">
        <div>
        <FilterPanel
          filters={filters}
          setFilters={setFilters}
          response={data}
          />
          </div>


        <div className="flex-1">
          <Card response={filteredData} />
        </div>
      </div>
    </div>
  );
}
