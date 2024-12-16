import React, { useEffect, useState } from 'react';

import Title from './Title';
import {products} from '../assets/Assets/assets.js/'
import ProductItem from './ProductItem.jsx';

const LatestCollection = () => {
   const firstTenimages = products.slice(0,10)
  
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        
        <Title text1={'LATEST'} text2={'COLLECTION'} />
      </div>

      {/* Rendering products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {firstTenimages.map((item, index) => (
          <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
