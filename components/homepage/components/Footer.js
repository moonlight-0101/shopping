import React from 'react';
import { FaTelegram,FaTwitter,FaInstagram,FaFacebookF,FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
       <div className=' bg-[#dddddd80]  p-4  '>
         <div >
            <div className=' flex-col-reverse text-center sm:text-left md:flex-row flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7 mb-4'>
            <div>
                <button className='bg-current  hover:bg-blue-500 mb-4 sm:mb-0 md:w-auto w-full duration-300 px-5 py-2.5 rounded-md text-white'>درخواست کد</button>
                <input type="text"
                placeholder='لطفا شماره خود را وارد کنید'
                className='text-gray-800 border-b border-current sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none'
                />
            </div>
              
               <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'>
                    <span className='text-current'>Mahtab</span>Web developer
                </h1>
              
            </div>
            
        </div>
        <div className='flex  '>
        <div className='grid w-[1600px] mr-10 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 '>
            <ul>
                <li>محصولات</li>
                <li>لپتاپ</li>
                <li>لپتاپ</li>
                <li>لپتاپ</li>
                <li>لپتاپ</li>
            </ul>
            <ul>
                <li>محصولات</li>
                <li>لپتاپ</li>
                <li>لپتاپ</li>
                <li>لپتاپ</li>
                <li>لپتاپ</li>
            </ul>
            <ul>
                <li>محصولات</li>
                <li>لپتاپ</li>
                <li>لپتاپ</li>
                <li>لپتاپ</li>
                <li>لپتاپ</li>
            </ul>

        </div>

        <div className='flex justify-center ml-24 items-center '>
            <ul className=' flex-col flex  sm:flex-row justify-between items-center sm:gap-8 h-[200px]'>
                <li className=' bg-blue-400 hover:text-white mt-5 sm:mt-0 py-2  text-[#ccc] w-8 h-8 flex justify-center items-center  rounded-full '>
                   <FaTwitter size={20}/>
                </li>
                <li className='  bg-blue-400 hover:text-white  mt-5 py-2  sm:mt-0  text-[#ccc] w-8 h-8 flex justify-center items-center  rounded-full '>
                   <FaInstagram size={20}/>
                </li>
                <li className='  bg-blue-400 hover:text-white  mt-5 py-2 sm:mt-0  text-[#ccc] w-8 h-8 flex justify-center items-center  rounded-full '>
                   <FaTelegram size={30}/>
                </li>
                <li className='  bg-blue-400 hover:text-gray-100 py-2 mt-5  sm:mt-0  text-[#ccc] w-8 h-8 flex justify-center items-center  rounded-full '>
                  <FaLinkedinIn/>
                </li>
                <li className='  bg-blue-400 hover:text-white py-2 mt-5  sm:mt-0  text-[#ccc] w-8 h-8 flex justify-center items-center  rounded-full '>
                  <FaFacebookF/>
                </li>
             
               
            </ul>
        </div>
        </div>

       </div>
    );
};

export default Footer;