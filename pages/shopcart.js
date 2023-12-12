import React, { useContext } from 'react';
import Cart from '../components/shared/Cart';
import { ProductContext } from '../context/ProductCart';
import Link from 'next/link';
import {MdArrowBackIos} from 'react-icons/md'
import {BsCartX} from 'react-icons/bs'
import {TfiFaceSad} from "react-icons/tfi"
import {BiHappyHeartEyes} from "react-icons/bi"



const Shopcart = () => {
    const {state,dispatch}=useContext(ProductContext)
    console.log(state.selectedItems);
    return (
    
        <div className='h-screen'>
            {/* header  */}
              {/* <div className='flex  p-4 bg-gradient-to-r from-purple-300 via-purple-400 to-purple-600 mx-4  rounded-se-3xl rounded-ss-3xl'>
                    <h2 className='  font-bold  text-white'>سبد خرید کاربر</h2>
                    <div className=' text-white mt-2 ml-2'> <MdArrowBackIos/></div>
                <Link href="/product">
                    <h2 className='  font-bold  text-white hover:text-gray-100'>صفحه محصولات</h2>
                </Link>
            </div> */}
            {/* header */}
            <div className='grid  grid-cols-8'>
            <div className='col-span-5 mt-4 mr-4'>
                {state.itemsCounter === 0 ? 
                <div className='mr-[200px]'>
                <span className='text-current'><BsCartX  size={350} className=' mt-10'/></span>
                <div className='flex mt-10 gap-4 mr-10 '> 
                <span className='font-bold text-2xl text-current'> سبد خرید خالی است</span>
                <span className='text-current '> <TfiFaceSad size={30} className=''/></span>
                </div>
                </div>
                
                :state.selectedItems.map(item=> <Cart key={item.id} data={item}/>)}
          
           </div>

             <div className='static col-span-3'>
             <div className='w-[300px] h-[220px] relative shadow-[inset_0px_0px_2px_#007bff] rounded-se-3xl rounded-tr-3xl rounded-b-2xl  mt-28  mr-6 p-4'>
            <div className='w-[300px] h-[20px] bg-current rounded-se-3xl rounded-tr-3xl top-0 left-0 absolute mr-6'></div>
            <h3 className='font-bold text-current mt-8'>تعداد محصولات:<span className='mr-4 text-gray-800'>{state.itemsCounter}</span></h3>
            <h3 className='font-bold text-current mt-4'>قیمت کل:<span className='mr-4 text-gray-800'>{state.total}</span></h3>
            <div className='mt-10 flex gap-8'>
                <button onClick={()=>dispatch({type:"CLEAR"})} className='border border-current text-current text-xs rounded-tr-lg rounded-bl-lg px-4 py-2'>حذف سبد خرید</button>
                <button  onClick={()=>dispatch({type:"CHECKOUT"})}className='px-4 py-2 text-white bg-current rounded-tr-lg rounded-bl-lg'>تسویه حساب</button>
            </div>

            </div>

            {
                state.checkout && 
                <div className='flex gap-2 border-b pb-4 border-gray-500 '> 
                    <div className='font-bold text-xl text-gray-500 mt-10 mr-5 '> تسویه حساب با موفقیت انجام شد</div>
                     <span className='text-current mt-10 animate-spin '> <BiHappyHeartEyes size={30}/></span>
                </div>
               
            }
            </div>

            </div>
        </div>
    );
};

export default Shopcart;