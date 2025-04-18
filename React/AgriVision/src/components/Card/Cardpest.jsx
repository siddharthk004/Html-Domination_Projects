import React from "react";
import { FiHeart } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgArrowTopRightR } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../../Axios";
import { useState } from "react";

function Cardpest({data,index}) {
  const navigate = useNavigate();
  const [isWishlistAdded, setIsWishlistAdded] = useState(false); // Track if the product is in the wishlist
  const [isCartAdded, setCartAdded] = useState(false); // Track if the product is in the wishlist

  const handleBuy = () => {
    const email = checkEmailAndRedirect();
      if (!email) return; // Prevent execution if email is missing or already added
    navigate("/buyproduct", {
      state: {
        productname: data.productname,
        productcompanyname: data.productcompanyname,
        productimage: data.productimage,
        beforediscount: data.beforediscount,
        afterdiscount: data.afterdiscount,
        discount: data.discount,
      },
    });
  };

  const checkEmailAndRedirect = () => {
    const email = localStorage.getItem("email");
    if (!email) {
      navigate("/signin"); // Redirect to login if email is missing
      return null;
    }
    return email;
  };

const addToWishlist = async () => {
  const email = checkEmailAndRedirect();
  if (!email || isWishlistAdded) return; // Prevent execution if email is missing or already added
  if (isWishlistAdded) return; // Prevent multiple clicks

  const wishlistData = {
    productname: data.productname,
    productcompanyname: data.productcompanyname,
    productimage: data.productimage,
    beforediscount: data.beforediscount,
    afterdiscount: data.afterdiscount,
    discount: data.discount,
  };
  

  try {
    const response = await Axios().post(
      `/user/wishlist`, // API endpoint
      wishlistData, // Request body
      {
        params: { email }, // Query parameters
        headers: {
          "Content-Type": "application/json", // Ensure the request is JSON
        },
      }
    );

    // Handle success
    console.log("Response:", response.data);
    setIsWishlistAdded(true); // Mark product as added to the wishlist  
  } catch (error) {
    // Handle error
    console.error("Error adding to wishlist:", error.response?.data || error.message);
  }
};


const addToCart = async () => {
  const email = checkEmailAndRedirect();
  if (!email || isCartAdded) return; // Prevent execution if email is missing or already added
  if (isCartAdded) return; // Prevent multiple clicks

  const cartData = {
    productname: data.productname,
    productcompanyname: data.productcompanyname,
    productimage: data.productimage,
    beforediscount: data.beforediscount,
    afterdiscount: data.afterdiscount,
    discount: data.discount,
  };

  try {
    const response = await Axios().post(
      `/user/cart`, // API endpoint
      cartData, // Request body
      {
        params: { email }, // Query parameters
        headers: {
          "Content-Type": "application/json", // Ensure the request is JSON
        },
      }
    );

    // Handle success
    console.log("Response:", response.data);
    setCartAdded(true); // Mark product as added to the wishlist
  } catch (error) {
    // Handle error
    console.error(
      "Error adding to Cart:",
      error.response?.data || error.message
    );
  }
};

  return (
    <div key={index} className="p-2 pt-5 pl-2">
      
      <div className="h-[100%] w-[90%] bg-green-100 rounded-3xl border border-green-400 shadow-2xl">
        <div className="flex m-[5px]">
          <div className=" h-8 bg-yellow-300 w-[50%] overflow-hidden rounded-lg">
            <h1 className="text-sm p-[5px] ml-1 font-lightbold ">{data.discount}% OFF</h1>
          </div>
          <button
              onClick={addToWishlist}
              className={`h-8 w-[80px] ml-[13vh] mt-2 rounded-xl ${
                isWishlistAdded ? "text-green-100 text-white cursor-not-allowed" : ""
              }`}
              disabled={isWishlistAdded} // Disable button if already added
            >
              <FiHeart className="h-10 w-8 ml-1" />
            </button>
        </div>
      <Link to={`/ProductDetailspest/${data.id}`}>
        <div className="h-[15vh] w-[18vh] ml-10 leading-none">
          <img
            src={data.productimage}
            alt="Product Image"
            className="w-[60%] ml-[16%] h-[15vh] rounded-3xl"
          />
        </div>
        <h1 className="text-xl m-2 font-semibold leading-none text-center">{data.productname}</h1>
        <h1 className="text-sm text-center leading-none">{data.productcompanyname}</h1>
        <h1 className="text-lg  mb-2  text-center font-bold text-green-700">
          {data.afterdiscount} RS<s className="ml-3 text-sm text-black">{data.beforediscount} Rs</s>
        </h1></Link>
        <div className="w-[140%]">
        <div className="flex gap-5 mb-2 w-[70%] justify-center mt-2 text-green-900">
        <button onClick={addToCart} 
          className={`rounded-md bg-green-300 h-10 w-20 flex border-green-500 border ${
              isCartAdded
                ? "text-green-100 text-white cursor-not-allowed"
                : ""
            }`}
            disabled={isCartAdded}>
            <MdOutlineShoppingCart className="h-10 w-8 ml-1" />
            <h1 className="mt-2 ml-1 font-bold">Add</h1>
          </button>
          <button onClick={handleBuy} className="rounded-md bg-blue-600 text-white h-10 w-20 flex border-green-500 border">
            <CgArrowTopRightR className="h-10 w-7 text-sm ml-1" />
            <h1 className="mt-2 ml-2 font-bold">Buy</h1>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Cardpest;
