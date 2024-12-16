import React, { useEffect, useState } from 'react'
import Title from '../Components/Title';
import { useCart } from '../context/ShopContext';

const Cart = () => {
  const {CartItems} = useCart

const [ cartData , setCartData] = useState([]);
useEffect(()=>{
  const tempData =[];
  for (const items in CartItems){
    for (const item in CartItems[items]){
      if(CartItems[items][item]>0){
        tempData.push({_id:items,size:item, quantity:[items][item]})
      }
    }
  }
  setCartData(tempData)
},[CartItems])

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'}/>

      </div>
      <div>
        {cartData.map((item, index)=>{
          const productData = products.find((product)=> product._id === item._id);
          return (
            <div key={index} className='py-4 broder-t broder-b text-gray-700 grid grid-cols-[4fr_0.5_0.5fr] sm:grid-cols-{4fr_2fr_0.5fr] items-center gap-4'>
              <div className=' flex items-start gap-6'>
                <img className='w-16 sm:w-20 ' src={productData.image[0]} alt="" />
                <div >
                  <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                   <div className='flex items-center gap-5 mt-2'>
                    <p>{productData.price}</p>
                   </div>

                </div>
              </div>

            </div>
          )
        })
        }
      </div>

    </div>
  )
}

export default Cart