import Link from 'next/link';
import React, { useContext, useState } from 'react';
// import Image from 'next/image';
import { BsCart2 } from 'react-icons/bs';
import { GoTrash } from 'react-icons/go';
import { ProductContext } from '../../context/ProductCart';
import { isInCart, quantityCount } from '../helpers/function';
import { FileByTable } from '../../api/api';
import Image from 'next/image';
import axios from 'axios';
// import Cookies from 'universal-cookie';
import cookie from 'universal-cookie'

const Cartp = ({ data}) => {

    const[isAddToCart,setIsAddToCart]=useState(false)
    const [quantity,setQuantity]=useState(0)
    const addToCart=async() => {
        const Token=cookie.get('token')
        try{
           const response =await axios.post('http://abiserve.ir/api/cart',{productId:data.id,quantity},{
                headers: { 
                    'Authorization':`Bearer ${Token}`,
                    'Content-Type': 'application/json',
                    'sub-domain': 'test',
                  },
            })
            console.log(response);
            setIsAddToCart(true)
            setQuantity(1)
        }
        catch(error){
            console.error("مشکلی پیش امده است",error)
        }
    }

    const deleteProduct=async(productId)=>{
        try{
            const response =await axios.delete('http://abiserve.ir/api/cart',{data:{productId},quantity},{
                 headers: {
                     'Content-Type': 'application/json',
                     'sub-domain': 'test',
                   },
             })
             console.log(response.data.message);
         }
         catch(error){
             console.error("مشکلی پیش امده است",error)
         }}
    
    const increaseQuantity=()=>{
        setQuantity(quantity+1)
    }
    const decreaseQuantity=()=>{
        setQuantity(quantity-1)
    }

    const { state, dispatch } = useContext(ProductContext)

    const image= Number(data.img)
    return (
        <>
        
        <div className='w-[250px] h-[370px] m-auto  shadow-[inset_0_1px_10px_#e4e9e9]   px-4 py-2'>
            <div className='flex items-center justify-center'>
            <img src={FileByTable(image)} alt='image ' className='w-[170px] h-[160px] pb-8 border-b mt-2 border-gray-200' />
             

            </div>
            <div className=' relative mb-4'>
                <div>
                    <h3 className='bg-current absolute left-3 -top-3 text-white w-[180px] rounded-full text-sm py-2 flex items-center justify-center'> {data.name}</h3>

                </div>

            </div>
            <div className='flex items-center gap-3 mt-10 '>
                <span>قیمت محصول:</span>
                <h2>{data.price}</h2>
            </div>
            <div className='flex items-center  justify-between text-white mt-10 '>
                {/* {
                    isInCart(state, data.id) ?
                        <button onClick={() => dispatch({ type: "INCREASE", payload: data})} className='w-8 h-8 rounded-lg bg-current text-white text-xl flex items-center justify-center'> <span className='-mt-1'>+</span> </button> :
                        <div className=' rounded-lg relative w-[130px] border border-current px-2 py-1 '>
                            <button className='text-xs text-gray-700 mb-1' onClick={() => dispatch({ type: "ADD_ITEM", payload: data})}>افزودن به سبد خرید </button>
                            <div className=' text-current absolute left-1 top-2'><BsCart2 /></div>
                        </div>
                } */}
                {
                    isAddToCart ?
                      <button onClick={increaseQuantity} className='w-8 h-8 rounded-lg bg-current text-white text-xl flex items-center justify-center'> <span className='-mt-1'>+</span> </button>
                      :<div className=' rounded-lg relative w-[130px] border border-current px-2 py-1 '>
                      <button className='text-xs text-gray-700 mb-1' onClick={addToCart}>افزودن به سبد خرید </button>
                      <div className=' text-current absolute left-1 top-2'><BsCart2 /></div>
                      </div>  


                }

                {

                  quantity === 1 && <button onClick={()=>deleteProduct(data.id)} className='ml-10 text-current'><GoTrash size={30} /></button>


                }
                {
                    quantity > 1 && <button onClick={decreaseQuantity} className='w-8 h-8 text-current border border-current rounded-lg ml-10'><span className='font-bold w-4'>-</span></button>
                }


                <Link href={`/product/${data.id}`}>
                    <h3 className='bg-current text-xs rounded-lg px-3 py-2.5'>جزییات</h3>
                </Link>
            </div>


        </div>
        </>
    );
};

export default Cartp;