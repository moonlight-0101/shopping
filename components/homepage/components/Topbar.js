import Link from 'next/link';
import React from 'react';
import { FcPhone} from 'react-icons/fc';

const Topbar = () => {
    return (
        <div>
            <div className='flex justify-between items-center  bg-current px-4 py-3 '>
                <div className='flex items-center px-4 border border-gray-900 w-40 h-8 rounded-2xl relative'>
                    <Link href="login" className='flex-1  font-normal text-white text-sm cursor-pointer bg-transparent z-10 '> ورود</Link>
                  <Link href="register" className='flex-1 font-normal text-white text-sm cursor-pointer mr-6 bg-transparent z-10'>ثبت نام</Link>
                    <input type="radio" name="sign in" id="sing in"
                        className='top-0 right-0 absolute invisible' />
                    <label htmlFor="sing in" 
                    className='w-1/2 absolute h-full top-0 right-0 bg-gray-900 rounded-2xl '></label>
                </div>

                <div className='   shadow-[0px_4px_10px_gray] bg-gray-900 rounded-full w-24 sm:w-48 h-10 -mt-2'>
                  <div className='flex items-center justify-center w-full h-full gap-2'>
                    <div className='text-white text-xs mt-1 sm:block hidden'>09903228574</div>
                 <div className='  animate-bounce '>
                 <FcPhone size={25}/>
                 </div>
                  </div>
                </div>

            </div>
        </div>
    );
};

export default Topbar;