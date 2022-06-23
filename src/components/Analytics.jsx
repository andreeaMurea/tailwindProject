import React from 'react'
import Laptop from '../assets/laptop.jpg'
import Button from './Button/CustomButtonComponent.tsx'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                    Manage Data Analytics Centrally
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam enim est alias, harum modi nam non ex reprehenderit, cumque quos perspiciatis commodi maiores nostrum similique ipsam dicta illum velit a?
                </p>
                <Button
                    className='rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]'
                    border="none"
                    color="black"
                    width = "200px"
                    children = "Get Strated"
                />
            </div>
        </div>
    </div>
  )
}

export default Analytics