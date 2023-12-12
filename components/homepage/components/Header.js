import Link from 'next/link';
import React from 'react';

const Header = () => {
  
    return (
        
        <div className='py-5 '>
            <nav className=' bg-[#dddddd80] w-[100%] m-auto  -mt-5   '>
                <div className='m-auto container flex justify-between items-center text-gray-900   pb-4'>
                    <ul className='hidden md:flex items-center pr-10 text-base font-semibold cursor-pointer'>
                        <Link href="/">
                        <li className="hover:border-b border-black/40  transition-color duration-100 hover:animate-pulse   pt-5 pb-2 px-6">خانه</li>
                        </Link>
                        <Link href="/product">
                        <li className="hover:border-b border-black/40  transition-color duration-100 hover:animate-pulse   pt-5 pb-2 px-6">محصولات</li>
                        </Link>
                        <li className="hover:border-b border-black/40  transition-color duration-100 hover:animate-pulse   pt-5 pb-2 px-6">درباره ما</li>
                       <Link href="/contactus">
                       <li className="hover:border-b border-black/40  transition-color duration-100 hover:animate-pulse   pt-5 pb-2 px-6">ارتباط با ما</li>
                       </Link> 
                    </ul> 
                    <button className=' block md:hidden py-2 px-3 mt-3 bg-gray-400 rounded focus:outline-none hover:bg-teal-200 group'>
                        <div className='w-5 h-1 bg-white mb-1'></div>
                        <div className='w-5 h-1 bg-white mb-1'></div>
                        <div className='w-5 h-1 bg-white '></div>
                        <div className="top-0 z-[1000] -right-full absolute h-[400px] w-8/12 bg-gray-400 opacity-0 border group-focus:right-0 group-focus:opacity-100 transition-all duration-500">
                            <ul className=' flex flex-col gap-8 items-center w-full text-base cursor-pointer pt-10'>
                            <li className="w-full h-full hover:bg-gray-100  py-4 px-6">خانه</li>
                            <li className="w-full h-full hover:bg-gray-100  py-4 px-6">محصولات</li>
                            <li className="w-full h-full hover:bg-gray-100  py-4 px-6">درباره ما</li>
                            <li className="w-full h-full hover:bg-gray-100  py-4 px-6">ارتباط با ما</li>
                            </ul>
                        </div>
                    </button>
    
                    <h1 className=' pl-10 mt-4 text-xl font-bold'>Navbar</h1>
                </div>
    
            </nav>
        </div>
      
    
    );
};
export default Header

