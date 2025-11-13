import React, { useState, useEffect } from "react";


const FilterPanel = ({filters,setFilters,response}) => {
  const [brands, setBrands] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const brandsArray = []
  useEffect(() => {
    
    const fetchBrands = () => {
      response.map((ele)=>{
        if(!brandsArray.includes(ele.designer)){
          brandsArray.push(ele.designer)
        }
      });
      setBrands(brandsArray)
    };
    fetchBrands();
  }, [response]);

  const toggleDropdown = (key) => {
    setIsOpen((prev) => {
      const newOpenState = { ...prev, [key]: !prev[key]}
      
      if (!newOpenState[key]) {
        setFilters((prevFilters) => ({
          ...prevFilters,
          [key === "brand" ? "brand" : key]: null, // Reset corresponding filter
        }));
      }
      return newOpenState;
    })
  };

  const handleFilterChange = (filterKey, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterKey]: value,
    }));
  };

  const handleIsOpen = ()=>{
    console.log("run handle isOpen")
    setIsOpen(!isOpen)
  }

  return (
    <div className="md:w-[20vw] p-4 text-sm lg:text-lg border-b border-gray-300">
      <div className="flex flex-row justify-between" onClick={()=>handleIsOpen()}>
        <h2 className="uppercase font-semibold">Filter By</h2>
        <div>
          {isOpen ? <span className="text-xl">&#9662;</span> : <span className="text-xl">&#9652;</span> }
        </div>
      </div>

    <div className={`${isOpen ? "max-h-none opacity-100" : "max-h-0 opacity-0" } md:max-h-none md:opacity-100`} >
      {/* Option 1: Brand */}
        <div className="">
        <button
          onClick={() => toggleDropdown("brand")}
          className="flex justify-between w-full py-4 border-b border-gray-300 text-left"
        >
          BRAND
          <span>&#9662;</span>
        </button>
        {isOpen.brand && (
          <div className="mt-2">
            {brands.map((brand) => (
              <label
                key={brand}
                className="flex items-center space-x-2 text-sm text-gray-600"
              >
                <input 
                  type="radio" 
                  name="brand" 
                  value={brand} 
                  // onChange={() => setFilters((prev) => ({ ...prev, brand }))}
                  onChange={(e)=> handleFilterChange("brand",e.target.value)} 
                />
                <span>{brand}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Option 2: Gender */}
      <div>
        <button
          onClick={() => toggleDropdown("gender")}
          className="flex justify-between w-full py-4 border-b border-gray-300 text-left"
        >
          GENDER
          <span>&#9662;</span>
        </button>
        {isOpen.gender && (
          <div className="mt-2">
            {["Male", "Female"].map((gender) => (
              <label
                key={gender}
                className="flex items-center space-x-2 text-sm text-gray-600"
              >
                <input type="radio" name="gender" value={gender} onChange={(e)=> handleFilterChange("gender",e.target.value)} />
                <span>{gender}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Option 3: Percent Off */}
      <div>
        <button
          onClick={() => toggleDropdown("percentOff")}
          className="flex justify-between w-full py-4 border-b border-gray-300 text-left"
        >
          PERCENT OFF
          <span>&#9662;</span>
        </button>
        {isOpen.percentOff && (
          <div className="mt-2">
            {["10 to 20", "20 to 30", "30 to 40", "40 to 50"].map((range) => (
              <label
                key={range}
                className="flex items-center space-x-2 text-sm text-gray-600"
              >
                <input type="radio" name="percentOff" value={range} onChange={(e)=> handleFilterChange("percentOff",e.target.value)} />
                <span>{range}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Option 4: Color */}
      <div>
        <button
          onClick={() => toggleDropdown("color")}
          className="flex justify-between w-full py-4 border-b border-gray-300 text-left"
        >
          COLOR
          <span>&#9662;</span>
        </button>
        {isOpen.color && (
          <div className="mt-2">
            {[
              "Black",
              "White",
              "Red",
              "Blue",
              "Green",
              "Gold",
              "Silver",
              "Pink",
              "Tan",
              "Brown",
            ].map((color) => (
              <label
                key={color}
                className="flex items-center space-x-2 text-sm text-gray-600"
              >
                <input type="radio" name="color" value={color} onChange={(e)=> handleFilterChange("color",e.target.value)}  />
                <span>{color}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Option 5: Price */}
      <div>
        <button
          // onClick={() => toggleDropdown("price")}
          className="flex justify-between w-full py-4 border-b border-gray-300 text-left"
        >
          PRICE
          <span>&#9662;</span>
        </button>
        {isOpen.price && (
          <div className="mt-2 space-y-2">
            <label className="block text-sm text-gray-600">
              From:
              <input
                type="number"
                name="priceFrom"
                className="block w-full mt-1 border border-gray-300 rounded"
                // onChange={(e)=> handleFilterChange("price",e.target.value)} 
              />
            </label>
            <label className="block text-sm text-gray-600">
              To:
              <input
                type="number"
                name="priceTo"
                className="block w-full mt-1 border border-gray-300 rounded"
                // onChange={(e)=> handleFilterChange("price",e.target.value)} 
              />
            </label>
          </div>
        )}
      </div>

      {/* Option 6: Size */}
      <div>
  <button
    onClick={() => toggleDropdown("size")}
    className="flex justify-between w-full py-4 text-left"
  >
    SIZE
    <span>&#9662;</span>
  </button>
  {isOpen.size && (
    <div className="mt-2">
      {Array.from({ length: 6 }, (_, i) => i + 5).map((size) => (
        <label
          key={size}
          className="flex items-center space-x-2 text-sm text-gray-600"
        >
          <input
            type="radio"
            name="size"
            value={size}
            onChange={() => setFilters((prev) => ({ ...prev, size }))}
          />
          <span>{size}</span>
        </label>
      ))}
    </div>
  )}
</div>
    </div>



    </div>
  );
};

export default FilterPanel;
