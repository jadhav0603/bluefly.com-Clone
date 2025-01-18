import React from "react";
import Done from "/image/payment/pngwing.com.png";
import thankU from "/image/payment/pngwing.com (1).png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
  const [image, setImage] = useState(Done);

  const Navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setImage(thankU);
    }, 2000);

    setTimeout(() => {
      Navigate("/", "_");
    }, 5000);
  }, [image]);

  return (
    <div
      style={{
        display: "flex",
        height: "40vw",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"#f9f9f9",
      }}
    >
      <h4>This is Demo Project thats why we cant impliment payment methods.</h4>
      <img style={{ width: "12vw",margin:"2vw"}} src={image} alt="image" />
      <h5>Thank You For Visiting My Website</h5>
    </div>
  );
}

export default Payment;
