import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../assets/Assets/assets.js';
import { assets } from '../assets/Assets/assets.js';
import RelatedProducts from '../Components/RelatedProducts.jsx';

const Product = () => {
  const { productid } = useParams();
  const [data, setData] = useState(null); // Fixed initial state
  const [size, setSize] = useState('');
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item._id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { id: item._id, name: item.name, image: item.image, quantity: 1 }];
      }
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCart((prevCart) => {
      return prevCart
        .map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0);
    });
  };

  const fetchProductData = () => {
    const product = products.find((item) => item._id === productid);
    if (product) setData(product);
  };

  useEffect(() => {
    fetchProductData();
  }, [productid, products]);

  useEffect(() => {
    console.log('Cart updated:', cart); // Monitor cart updates
  }, [cart]);

  return data ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Products data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {data.images &&
              data.images.map((image, index) => (
                <img
                  src={image}
                  key={index}
                  className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                  alt={`product-${index}`}
                />
              ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={data.image} alt={data.name} />
          </div>
        </div>

        {/* Product info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{data.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            {[...Array(4)].map((_, i) => (
              <img src={assets.star_icon} key={i} alt='star' className='w-3.5' />
            ))}
            <img src={assets.star_dull_icon} alt='dull star' className='w-3.5' />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{data.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{data.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div>
              {data.sizes &&
                data.sizes.map((item, index) => (
                  <button
                    aria-pressed={item === size}
                    onClick={() => setSize(item)}
                    className={`border py-2 px-4 bg-gray-100 ${
                      item === size ? 'border-orange-500' : ''
                    }`}
                    key={index}
                  >
                    {item}
                  </button>
                ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(data)}
            className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'
          >
            ADD TO CART
          </button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description & Review section */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews</p>
        </div>
        <div className='flex flex-col gap-4 border p-4'>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
          <p>It is a long established fact that a reader will be distracted by the readable content...</p>
        </div>
      </div>

      {/* Display related products */}
      <RelatedProducts category={data.category} subCategory={data.subCategory} />
    </div>
  ) : (
    <div className='opacity-0'>Loading...</div>
  );
};

export default Product;
