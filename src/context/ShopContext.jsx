import React, { useEffect, useState } from 'react'
import { createContext , useContext } from "react";
import {products} from "../assets/Assets/assets"
import {toast} from 'react-toastify'






 export const ShopContext = createContext();

 
  export const ShopContextProvider = ({children}) => {
 const [cartItems , setCartItems] = useState([])

 const addToCart = (item)=>{
  setCartItems([...cartItems, item])
 }
  const removeFromCart=(item)=>{
    setCartItems(cartItems.filter((cart)=>cart!== item))
  }
  const getCartCount = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      try {
        if (cartItems[item] > 0) {
          totalCount += cartItems[item];
        }
      } catch (error) {
        console.error("Error calculating cart count:", error);
      }
    }
    return totalCount;
  };
  
return(
  <ShopContext.Provider value={{cartItems, addToCart,removeFromCart , getCartCount}}>
    {children}
  </ShopContext.Provider>
)
 }
export const useCart =()=>{
  return useContext(ShopContext)
}

