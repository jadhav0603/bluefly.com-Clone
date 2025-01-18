


import React, { useState, useEffect } from "react";

const FilterPanel = (response) => {
  const [brands, setBrands] = useState([]);
  const [isOpen, setIsOpen] = useState({});

  // Fetch API Data for brands
  useEffect(() => {
    const fetchBrands = async () => {
      // const response = await fetch("YOUR_API_ENDPOINT");
      // const data = await response.json();
      setBrands(response.designer || []);
    };
    fetchBrands();
  }, []);

  const toggleDropdown = (key) => {
    setIsOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-72 bg-gray-100 p-4 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Filter By</h2>

      {/* Option 1: Brand */}
      <div>
        <button
          onClick={() => toggleDropdown("brand")}
          className="flex justify-between w-full py-2 border-b border-gray-300 text-left"
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
                <input type="radio" name="brand" value={brand} />
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
          className="flex justify-between w-full py-2 border-b border-gray-300 text-left"
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
                <input type="radio" name="gender" value={gender} />
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
          className="flex justify-between w-full py-2 border-b border-gray-300 text-left"
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
                <input type="radio" name="percentOff" value={range} />
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
          className="flex justify-between w-full py-2 border-b border-gray-300 text-left"
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
                <input type="radio" name="color" value={color} />
                <span>{color}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Option 5: Price */}
      <div>
        <button
          onClick={() => toggleDropdown("price")}
          className="flex justify-between w-full py-2 border-b border-gray-300 text-left"
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
              />
            </label>
            <label className="block text-sm text-gray-600">
              To:
              <input
                type="number"
                name="priceTo"
                className="block w-full mt-1 border border-gray-300 rounded"
              />
            </label>
          </div>
        )}
      </div>

      {/* Option 6: Size */}
      <div>
        <button
          onClick={() => toggleDropdown("size")}
          className="flex justify-between w-full py-2 border-b border-gray-300 text-left"
        >
          SIZE
          <span>&#9662;</span>
        </button>
        {isOpen.size && (
          <div className="mt-2">
            {Array.from({ length: 10 }, (_, i) => i).map((size) => (
              <label
                key={size}
                className="flex items-center space-x-2 text-sm text-gray-600"
              >
                <input type="radio" name="size" value={size} />
                <span>{size}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterPanel;
