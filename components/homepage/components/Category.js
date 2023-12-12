import React from 'react';
import img2 from '../image/lp.jpg'
import img3 from '../image/kp.jpg'
import img7 from '../image/oo.jpg'


const Category = () => {
    return (
        <div className='max-w-[1400px] m-auto p-10 mr-28 sm:mr-12 mb-10 sm:mb-0 '>
            <div className=' w-[1200px] m-auto gap-12 sm:h-[400px]  h-[280px]   sm:grid-cols-3 grid overflow-hidden  mt-24 grid-cols-1'>

                <div className='w-[250px] h-[280px]  hover:-translate-y-3 hover:scale-95 hover:transition-all duration-300 relative  overflow-hidden rounded-xl shadow-xl border border-[#ccc] '>

                    <div className='bg-gradient-to-t from-black/90  absolute opacity-80 w-full h-[80px] left-0  bottom-0 '>
                        <h2 className='text-center text-white  mt-10 '>محصول جدید</h2>
                    </div>
                    <div className=' w-full h-full '>
                        <img src={img7} alt="/" className=' object-cover w-full h-full  ' />
                    </div>
                </div>
              
                <div className='w-[250px] h-[280px]  hover:-translate-y-3 hover:scale-95 hover:transition-all duration-300  relative hover:overflow-hidden overflow-hidden  rounded-xl shadow-xl border border-[#ccc0] '>

                    <div className='bg-gradient-to-t from-black/90   absolute opacity-80 w-full h-[80px] left-0  bottom-0 '>
                        <h2 className='text-center text-white  mt-10 '>محصول جدید</h2>
                    </div>
                    <div className=' w-full h-full '>
                        <img src={img3} alt="/" className=' object-cover w-full h-full  ' />
                    </div>
                </div>
                <div className='w-[250px] h-[280px]   hover:-translate-y-3 hover:scale-95 hover:transition-all duration-300 relative hover:overflow-hidden overflow-hidden  rounded-xl shadow-xl border border-[#ccc] '>

                    <div className='bg-gradient-to-t from-black/90   absolute opacity-80 w-full h-[80px] left-0  bottom-0 '>
                        <h2 className='text-center text-white  mt-10 '>محصول جدید</h2>
                    </div>
                    <div className=' w-full h-full '>
                        <img src={img2} alt="/" className=' object-cover w-full h-full  ' />
                    </div>
                </div>
              </div>
        </div>
    );
};

export default Category;