import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductCart';
import { GoTrash} from 'react-icons/go';
import { FileByTable } from '../../api/api';

const Cart = ({data}) => {
    const {state,dispatch}=useContext(ProductContext)
    const image= Number(data.img)
    return (
        <div className=' '>
    
           <div className='flex w-[700px] h-[130px] shadow-lg mt-20 mr-10 items-center justify-between rounded-xl'>
            <img src={FileByTable(image)} className='w-[100px] h-[100px] rounded-lg my-2 mx-4'/>
            <div >
                <h2 className='text-xl font-bold text-gray-700 flex gap-2'>نام محصول:<p>{data.name}</p></h2>
                <h2 className='text-sm mr-4  pb-2 mt-4 font-bold text-gray-400'>
                قیمت محصول:{data.price}
                    <hr className='border border-b-current mt-2 border-b-2 rounded-full w-[150px]  animate-pulse'/>
                </h2>
            </div>
            <div>
                <span className='bg-blue-500 rounded-full text-xs text-white px-2 py-1'>{data.quantity}</span>
            </div>
            <div className='flex gap-2'>
                {
                    data.quantity > 1 ?
                    <button onClick={()=> dispatch({type:"DECREASE",payload:data})} className='w-8 h-8 rounded-lg bg-current text-white text-xl flex items-center justify-center'> <span className='-mt-1'>-</span> </button>:
                     <button onClick={()=>dispatch({type:"REMOVE_ITEM",payload:data})} className='text-current'><GoTrash size={30}/></button>
                    }
                 <button onClick={()=> dispatch({type:"INCREASE",payload:data})} className='w-8 h-8 rounded-lg ml-4 bg-current text-white text-xl flex items-center justify-center'> <span className='-mt-1 '>+</span> </button>

            </div>
           </div>
         
        </div>
    );
};

export default Cart;