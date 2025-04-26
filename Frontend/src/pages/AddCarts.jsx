import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddCarts = () => {
  const [cartArray, setCartArray] = useState([]);
  const [quantities, setQuantities] = useState({});
  
  const navigate = useNavigate();


  async function cartData() {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get("http://localhost:3000/handleCarts/getCartData", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCartArray(response.data);


      const initialQuantities = {};
      response.data.forEach((item) => {
        initialQuantities[item._id] = 1;
      });
      setQuantities(initialQuantities);
      
    } catch (error) {
      console.error("Failed to fetch cart data:", error.message);
    }
  }

  useEffect(() => {
    cartData();
}, []);

console.log("quantities = ",quantities)


  const updateQuantity = (id, type) => {
    setQuantities((prev) => {
      const currentQty = prev[id] || 1;
      const newQty = type === 'inc' ? currentQty + 1 : Math.max(currentQty - 1, 1);
      return { ...prev, [id]: newQty };
    });
  };


  const handleDeleteCart = async (productId) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete('http://localhost:3000/handleCarts/deleteCartData', {
        data: { Id: productId },
        headers: { Authorization: `Bearer ${token}` },
      });
      cartData(); // Refresh cart
    } catch (error) {
      console.log("Cart delete error:", error.message);
    }
  };


  const finalTotal = cartArray.reduce((acc, item) => {
    const qty = quantities[item._id] || 1;
    return acc + item.sellingPrice * qty;
  }, 0);

  return (
    <div className='w-[90vw] m-auto uppercase pb-[10px]'>
      <div className='flex justify-between p-[20px]'>
        <h1 className='font-serif text-[3vw]'>CART</h1>
        <p onClick={() => navigate('/')} className='text-[1.5vw] cursor-pointer'>
          CONTINUE SHOPPING &nbsp;
          <FontAwesomeIcon className="relative text-[1.5vw]" icon={faArrowRight} />
        </p>
      </div>

      <div className='flex gap-[50px]'>
        <div className='w-[60vw]'>
          <table className="border-separate border-spacing-y-4 w-full">
            <thead>
              <tr className='border-b border-b-black text-left'>
                <th className='w-[25vw]'>PRODUCT</th>
                <th className='w-[15vw]'>QUANTITY</th>
                <th className='w-[15vw]'>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {cartArray.map((ele, i) => (
                <tr key={i} className='border'>
                  <td className='flex gap-5 text-[1vw] items-center'>
                    <img className='w-[5vw] p-[10px]' src={ele.image1} alt={ele.productName} />
                    <div>
                      <p>{ele.productName}</p>
                      <p>${ele.sellingPrice}</p>
                      <p>COLOR: {ele.color}</p>
                    </div>
                  </td>

                  <td>
                    <div className="flex justify-center items-center">
                      <div className='border w-[7vw] rounded-[15px] flex justify-around'>
                        <button onClick={() => updateQuantity(ele._id, 'dec')}>-</button>
                        <span>{quantities[ele._id] || 1}</span>
                        <button onClick={() => updateQuantity(ele._id, 'inc')}>+</button>
                      </div>
                    </div>
                    <p className='w-[10vw] text-center underline text-[1vw] cursor-pointer' onClick={() => handleDeleteCart(ele._id)}>remove</p>
                  </td>

                  <td>
                    <p className='text-center'>${ele.sellingPrice * (quantities[ele._id] || 1)}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        <div className='w-[34vw] border p-[2vw] text-[1vw]'>
          <h1 className='flex font-serif text-[2.5vw] justify-center m-[20px]'>Subtotal ${finalTotal.toFixed(2)}</h1>
          <p className='flex justify-center text-[1vw]'>Taxes and shipping calculated at checkout</p>
          <button className='bg-black text-white text-[1.5vw] w-full rounded-[20px] mt-[40px] mb-[50px] p-[3px]'>CHECKOUT</button>
          <p>4 interest-free installments or from $18.68/mo with Shop Pay</p>
          <u>Check your purchasing power</u>

          <div className='mt-[100px] flex flex-col items-center'>
            <p>Express options available at checkout</p>
            <div className="flex flex-col justify-center items-center w-[98vw] mb-[50px]">
              <img className="w-[30vw]" src="./image/Home/footerCards.png" alt="Cards" />
              <p className="opacity-[50%] text-[1vw]">© 2025, Bluefly Powered by Vijay Jadhav.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCarts;
