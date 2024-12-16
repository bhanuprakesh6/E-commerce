import React, { useEffect, useState } from 'react';
import { products } from '../assets/Assets/assets.js';
import Title from '../Components/Title.jsx';
import ProductItem from '../Components/ProductItem.jsx';

const RelatedProducts = ({ category, subCategory }) => {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      // Filter products based on category and subCategory
      const filteredProducts = products
        .filter((item) => category === item.category && subCategory === item.subCategory)
        .slice(0, 5); // Limit to first 5 related products
      setRelated(filteredProducts);
    }
  }, [products, category, subCategory]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={'RELATED'} text2={"PRODUCTS"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item, index) => (
          <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
