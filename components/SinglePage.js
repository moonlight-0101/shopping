import React from 'react';
import img1 from '../public/image/p2.jpg'
import Image from 'next/image';
import {BiCart} from 'react-icons/bi'
import {FcBiohazard} from 'react-icons/fc'
import { FileByTable } from '../api/api';
import Header from './homepage/components/Header';
import Footer from './homepage/components/Footer';

{/* <img src={props.image} className='w-[250px]' /> */}
const SinglePage = ({props}) => {
    
    const images=props.details
    const filterArray=images.filter(item=> item.type==="img")
    const image=Number(filterArray[0].value)
    return (
        <div>
            <Header/>
           <div className='max-w-[800px] h-[490px] grid grid-cols-3 m-auto mt-10 rounded-xl mb-20 overflow-hidden shadow-[inset_0_-1px_6px_blue]'> 
            <div className='flex items-center justify-center h-full w-full bg-current/60' >
           
            <img src={FileByTable(image)} width={120} height={100} className='w-[250px]'/>
                </div>
                <div className=' col-span-2  mt-10'>
                  <div className='m-6'>
                    <h2 className='text-current font-bold text-xl'>نام محصول : <span className='text-xl text-gray-500'> {props.name} </span></h2>
                   <div>
                   <h1 className='mt-8' >توضیحات:</h1>
                    <p className='text-gray-600 text-sm'>{props.description}</p>
                   </div>
                   <div className='w-[160px] h-[40px] mt-4 shadow-[0px_1px_2px_#c1c4c4] py-1 rounded-xl flex items-center justify-center'>
                    <h3 className='text-xs text-current'> قیمت محصول: <span>{props.price}</span></h3>
                   </div>
                   <div className='flex my-8 gap-4'>
                    <h2>رنگ های موجود:</h2>
                    <div className='flex gap-3 items-center justify-center   px-4 py-2 '>
                        <div className='w-4 h-4 bg-green-600 rounded-full   p-2'> </div>
                        <div className='w-4 h-4 bg-rose-600 rounded-full  p-2'> </div>
                        <div className='w-4 h-4 bg-blue-600 rounded-full   p-2'> </div>
                        <div className='w-4 h-4 bg-yellow-600 rounded-full  p-2'> </div>
                    </div>
                     </div>
           
                  </div>
                  <div className='flex gag-4 mt-10'>
                    
                    <div className='border-current border hover:animate-bounce  flex gap-4 w-[160px] py-3 rounded-xl mr-20 justify-center items-center'>
                        <h1 className='text-current  font-bold'>موجود در انبار:{}</h1>
                    </div>
                    <div className='bg-current/80 hover:bg-gray-700  flex gap-4 w-[160px] py-3 rounded-xl mr-20 justify-center items-center'>
                    <button className='text-white text-xs font-bold '>افزودن به سبد خرید</button>
                    <span className='text-white'> <BiCart size={20}/></span>
                    </div>

                  </div>
                </div>

            </div>
            <Footer/>
        </div>
    );
};

export default SinglePage;