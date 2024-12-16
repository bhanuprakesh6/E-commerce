import React from 'react'
import { assets } from '../assets/Assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-ful md:w-2/3 text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'> COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delvery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium md-5 '>GET IN TOUCH </p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-334-456-7890</li>
                    <li>contact@forver.com</li>
                </ul>
            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2024@ frover.com -All Rights Are Reserved </p>
            </div>

        </div>
    </div>
  )
}

export default Footer