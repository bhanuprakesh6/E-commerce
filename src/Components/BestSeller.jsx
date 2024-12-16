import React from 'react'

import {products} from '../assets/Assets/assets.js'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {
    
    
    const bestproduct= products.filter((item)=>(item.bestseller))
    bestproduct.slice(0,5)

  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600' > Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte</p>

        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4  gap-y-6'>
            {
                bestproduct.map((item)=>(
                    <ProductItem id={item._id} image={item.image} name={item.name} price={item.price}/>

                ))
            }

        </div>

    </div>
  )
}

export default BestSeller