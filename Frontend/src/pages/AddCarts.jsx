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
      const response = await axios.get("https://bluefly-com-clone-6ri4.onrender.com/handleCarts/getCartData", {
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

  // console.log("quantities = ", quantities)


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
      await axios.delete('https://bluefly-com-clone-6ri4.onrender.com/handleCarts/deleteCartData', {
        data: { Id: productId },
        headers: { Authorization: `Bearer ${token}` },
      });
      cartData(); // Refresh cart
    } catch (error) {
      console.log("Cart delete error:", error.message);
    }
  };


  async function handleBuy() {
    if(cartArray.length > 0){
    const token = localStorage.getItem('token');
    try {
      await axios.delete('https://bluefly-com-clone-6ri4.onrender.com/handleCarts/deleteAllData', {
        headers: { Authorization: `Bearer ${token}` },
      });
      cartData();
    } catch (error) {
      console.log("Cart delete error:", error.message);
    }
    navigate('/Payment')
  }
  else{
    alert("NO DATA FOR CHECKOUT")
  }
  }


  const finalTotal = cartArray.reduce((acc, item) => {
    const qty = quantities[item._id] || 1;
    return acc + item.sellingPrice * qty;
  }, 0);

  return (
    <div className='w-[90vw] m-auto uppercase pb-[10px]'>
      <div className='flex justify-between p-[20px]'>
        <h1 className='font-serif text-xl'>CART</h1>
        <p onClick={() => navigate('/')} className='text-sm cursor-pointer'>
          CONTINUE SHOPPING &nbsp;
          <FontAwesomeIcon className="relative text-sm" icon={faArrowRight} />
        </p>
      </div>

      <div className='flex flex-col lg:flex-row gap-[50px]'>
        <div className=''>
          <table className="border-separate border-spacing-y-4 w-full">
            <thead>
              <tr className='border-b border-b-black text-left'>
                <th className='w-[25vw]'>PRODUCT</th>
                <th className='w-[15vw] text-center'>QUANTITY</th>
                <th className='w-[15vw] text-center'>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {cartArray.length === 0 ? 
              <p className='pt-[1vw]'>YOUR CART IS EMPTY</p> 
              :
              cartArray.map((ele, i) => (
                <tr key={i} className='border'>
                  <td className='flex flex-col lg:flex-row gap-5 text-sm items-center'>
                    <img className='lg:w-[5vw] w-[20vw] lg:p-[10px]' src={ele.image1} alt={ele.productName} />
                    <div>
                      <p>{ele.productName}</p>
                      <p>${ele.sellingPrice}</p>
                      <p>COLOR: {ele.color}</p>
                    </div>
                  </td>

                  <td>
                    <div className="flex flex-col justify-center items-center">
                      <div className='border lg:w-[7vw] w-[12vw] rounded-[15px] flex justify-around'>
                        <button onClick={() => updateQuantity(ele._id, 'dec')}>-</button>
                        <span>{quantities[ele._id] || 1}</span>
                        <button onClick={() => updateQuantity(ele._id, 'inc')}>+</button>
                      </div>
                    </div>
                    <p className='w-[10vw] text-center underline text-sm cursor-pointer flex justify-center w-full' onClick={() => handleDeleteCart(ele._id)}>remove</p>
                  </td>

                  <td>
                    <p className='text-center'>${ele.sellingPrice * (quantities[ele._id] || 1)}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        <div className='lg:w-[34vw] border p-[2vw] text-sm'>
          <h1 className='flex font-serif text-xl justify-center m-[20px]'>Subtotal ${finalTotal.toFixed(2)}</h1>
          <p className='flex justify-center text-sm'>Taxes and shipping calculated at checkout</p>
          <button className='bg-black text-white text-sm w-full rounded-[20px] mt-[40px] mb-[50px] lg:p-[3px] p-[10px]' onClick={() => handleBuy()}>CHECKOUT</button>
          <p>4 interest-free installments or from $18.68/mo with Shop Pay</p>
          <u>Check your purchasing power</u>

          <div className='mt-[100px] flex flex-col items-center'>
            <p>Express options available at checkout</p>
            <div className="flex flex-col justify-center items-center w-[98vw] mb-[50px]">
              <img className="lg:w-[30vw]" src="./image/Home/footerCards.png" alt="Cards" />
              <p className="opacity-[50%] text-sm">© 2025, Bluefly Powered by Vijay Jadhav.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCarts;
