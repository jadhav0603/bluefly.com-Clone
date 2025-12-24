import axios from "axios";

export const fetchNavSearchData = async (key, value, productCategory, page = 1) => {
  const response = await axios.get(
    `https://bluefly-com-clone-6ri4.onrender.com/searchData/${key}/${value}?page=${page}`
  );

  const filteredData = response.data.result.filter(
    (item) => item.category === productCategory || productCategory === "allData"
  );

  return filteredData;
};
