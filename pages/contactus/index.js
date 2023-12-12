import React from 'react';
import Image from 'next/image';
import bg from '../../public/image/bg-01.jpg'
import {HiLocationMarker,HiOutlineMail,HiOutlinePhone} from "react-icons/hi"
const Contact = () => {
    return (
        <>
       
        <div className=' w-screen  h-full -mt-6 '>
            <div className='sm:max-w-[900px]  h-full  pl-16 pr-10 sm:p-0 flex m-auto flex-col-reverse sm:flex-row  ' >
                <div className='flex-1  h-full mt-5'>
                    <div className=' relative'>
                        <Image src={bg} width={500} height={400} className='w-full h-full '/>
                         <div className=' bg-black/70 absolute top-0 left-0 w-full h-full'></div>
                         <div className='absolute top-[230px] left-[150px] sm:left-[170px] text-white'>
                            <ul >
                                <li>
                                <div className='flex gap-2'>
                                 <span className='text-white'><HiLocationMarker size={28} /></span>
                                  <h1 className='text-xl'>آدرس</h1>
                                </div>
                                <p className='text-gray-400 mt-3'>بجنورد,میدان بهارستان,فرهنگ 9</p>
                                </li>
                                <li>
                                <div className='flex gap-2 mt-10'>
                                 <span className='text-white'><HiOutlineMail size={28}/></span>
                                  <h1 className='text-lg'>ایمیل</h1>
                                </div>
                                <p className='text-green-700 font-bold mt-3 '>moonlight@gmail.com</p>
                                </li>
                                <li>
                                <div className='flex gap-2 mt-10'>
                                 <span className='text-white mt-1'><HiOutlinePhone size={25}/></span>
                                  <h1 className='text-lg'>شماره تماس</h1>
                                </div>
                                <p className='text-green-700 font-bold mt-2 mr-7'>0909909090</p>
                                </li>
                              
                            </ul>
                          
                      
                          </div>
                    </div>
                </div>


                <div className='flex-1 shadow-lg px-4 bg-white mt-5'>
                    <div className='mt-10 m-4  overflow-hidden rounded-lg border border-gray-200'>
                        <div className=' '>
                            <h2 className='py-6 px-4 text-gray-600 text-sm bg-white'>لطفا اطلاعات خود را در این قسمت وارد کنید *</h2>
                        </div>
                        <div className='flex w-full items-center justify-center  '>
                            <div className='w-1/2 border border-gray-200'>
                                <input type='text' placeholder='نام ' className='p-5 w-full outline-0 ' /></div>
                            <div className='w-1/2 border border-gray-200 '>
                                <input type='text' placeholder="نام خانوادگی" className='p-5 w-full outline-0 ' />
                            </div>
                        </div>
                    </div>
                    <div className='border border-gray-200 m-4 bg-white rounded-lg overflow-hidden'>
                        <div className=''>
                            <h2 className='p-5 text-gray-500 text-sm'>لطفا ایمیل خود را در این قسمت وارد کنید *</h2>
                        </div>
                        <div className='boder border-t border-gray-200'>
                            <input type='email' className='w-full p-4 outline-none' placeholder="eg.example@email.com" />
                        </div>
                     </div>
                     <div className='border border-gray-200 m-4 bg-white rounded-lg overflow-hidden'>
                        <div className=''>
                            <h2 className='p-5 text-gray-500 text-sm'>لطفا شماره تماس خود را در این قسمت وارد کنید</h2>
                        </div>
                        <div className='boder border-t border-gray-200'>
                            <input type='email' className='w-full p-4 outline-none' placeholder="09900109901" />
                        </div>
                     </div>
                     <div className='border border-gray-200 m-4 bg-white rounded-lg overflow-hidden'>
                        <div className=''>
                            <h2 className='p-5 text-gray-500 text-sm'>متن پیام</h2>
                        </div>
                        <div className='boder border-t border-gray-200'>
                            <textarea  className='w-full p-4 outline-none'></textarea>
                        </div>
                     </div>
                        <div className='flex items-center mb-3 justify-center'>
                            <button className='px-8 py-3 bg-blue-500 rounded-lg text-white hover:bg-blue-600  '>ارسال پیام</button>
                        </div>
                </div>

            </div>
        </div>
        </>
    );
};

export default Contact;