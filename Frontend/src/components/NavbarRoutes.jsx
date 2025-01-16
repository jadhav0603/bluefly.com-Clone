import axios from "axios";
import { useNavigate } from "react-router-dom";

function Routes() {
  const Navigate = useNavigate();
  
  const handleNavSearchData = async(key,value) => {
    const response = await axios.get(`http://localhost:3000/searchData/${key}/${value}`);
    console.log(response.data);
    const data = response.data

    Navigate('/SearchedDataPage', {state:{data}})

  };


  return (
    <div className="w-[98vw] flex flex-col justify-center uppercase ">
      <ul className="text-[1.3vw] flex flex-wrap justify-center  gap-[4vw] font-semibold text-[1.5vw] p-[2vw] w-[93vw] text-gray-800">
        <li className="relative group">
          <div className="">DESIGNERS</div>

          <div className="bg-white w-[93.2vw] flex gap-20 p-[1vw] text-[1vw] shadow-xl absolute top-6 left-[-4vw] m-0 left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-500 ">
            <div>
              <ul>
                <h1 className="mb-[15px]"> Featured Designers </h1>
                <li>Shop All</li>
                <li onClick={()=>handleNavSearchData('designer','Gucci')}>Gucci</li>
                <li>Valentino</li>
                <li>Christian Louboutin</li>
                <li>Saint Laurent</li>
                <li>Balenciaga</li>
                <li>Bottega Veneta</li>
              </ul>
            </div>

            <div>
              <ul>
                <h1 className="mb-[15px]">OTHER TOP DESIGNERS</h1>

                <li>Alexander McQueen</li>
                <li>Bogner</li>
                <li>Burberry</li>
                <li>Celine</li>
                <li>Chloe</li>
                <li>Dior</li>
                <li>Dolce & Gabbana</li>
                <li>Fendi</li>
                <li>Givenchy</li>
                <li>Jimmy Choo</li>
                <li>Lafayette 148 New York</li>
                <li>Manolo Blahnik</li>
                <li>Mario Valentino</li>
                <li>Moschino</li>
              </ul>
            </div>

            <div>
              <ul>
                <h1 className="mb-[15px]">.</h1>
                <li>Off-White</li>
                <li>Palm Angels</li>
                <li>Prada</li>
                <li>Saint Laurent</li>
                <li>Salvatore Ferragamo</li>
                <li>Stella McCartney</li>
                <li>Stuart Weitzman</li>
                <li>Tod'S</li>
                <li>Tom Ford</li>
                <li>Veja</li>
                <li>Vince</li>
                <li>Versace</li>
                <li>Shop All</li>
              </ul>
            </div>
          </div>
        </li>

        
        <li>CLOTHING </li>
        <li>SHOES</li>
        <li>HANDBAGS</li>
        <li>JEWELRY</li>
        <li>ACCESSORIES</li>
        <li>UNDER $50</li>
        <li>CLEARANCE</li>
      </ul>
    </div>
  );
}

export default Routes;
