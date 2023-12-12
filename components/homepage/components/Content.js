import React from 'react';
import img3 from '../image/de.png'
import img4 from '../image/kp.jpg'

const Content = () => {
    return (
        <div>
            <div className='max-w-[1200px] shadow m-auto p-10 mb-3 h-[400px] mt-10'>
                <div className=' sm:grid grid-cols-12  gap-20  w-full '>
                    <div className=' col-span-4 sm:col-span-6 h-full'>
                        <img src={img4} alt="" className='w-[200px] h-[200px] sm:w-[400px] m-auto rounded-lg sm:mt-16' />
                    </div>
                    <div className=' col-span-8 sm:col-span-6 text-xs sm:text-base sm:flex flex-col justify-center items-center gap-4 mt-2'>
                        <h3 className='text-xl sm:my-4 text-center'>نام محصول</h3>
                        <p className='text-center text-xs sm:text-sm md:text-base'> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</p>
                        <div className="flex items-center justify-center py-2">
                            <button className='btns sm:btn '>خرید محصول</button>
                        </div>
                    </div>

                </div>

            </div>


            <div className='gap-12 h-[500px] w-[100%]  m-auto justify-center  flex flex-col items-center '>

                
                
                <div className='relative w-[80%]  overflow-hidden'>
                    <input type="checkbox" className='peer top-0 absolute  inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' />
                    <div className='border-2 border-blue-500 rounded-full  h-12 w-full pl-5  flex items-center'>
                        <h1 className='text-lg font-semibold text-blue-500 p-6 '>خرید محصولات</h1>
                    </div>
                    <div className='top-3 absolute left-4 text-blue-500 transition-transform duration-150 peer-checked:rotate-180'>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>

                    </div>
                    <div className='bg-white overflow-hidden transition-all rounded-xl  duration-500 max-h-0
                 peer-checkout:max-h-40 peer-checked:max-h-40 '>
                        <div className="p-4">
                            <p>
                                ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                            </p>
                        </div>
                    </div>
                </div>
                <div className='relative w-[80%]  overflow-hidden '>
                    <input type="checkbox" className='peer top-0 absolute inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' />
                    <div className='border-2 border-yellow-600 rounded-full h-12 w-full pl-5  flex items-center'>
                        <h1 className='text-lg font-semibold text-yellow-600 p-6 '>خرید محصولات</h1>
                    </div>
                    <div className='top-3 absolute left-4 text-yellow-600 transition-transform duration-150 peer-checked:rotate-180'>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>

                    </div>
                    <div className='bg-white overflow-hidden transition-all rounded-xl  duration-500 max-h-0
                 peer-checkout:max-h-40 peer-checked:max-h-40 '>
                        <div className="p-4">
                            <p>
                                ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                            </p>
                        </div>
                    </div>
                </div>
                <div className='relative w-[80%]  overflow-hidden  '>
                    <input type="checkbox" className='peer top-0 absolute inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' />
                    <div className='border-2  border-rose-600 rounded-full h-12 w-full pl-5  flex items-center'>
                        <h1 className='text-lg font-semibold text-rose-600 p-6 '>خرید محصولات</h1>
                    </div>
                    <div className='top-3 absolute left-4 text-rose-600 transition-transform duration-150 peer-checked:rotate-180'>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>

                    </div>
                    <div className='bg-white overflow-hidden transition-all rounded-xl  duration-500 max-h-0
                 peer-checkout:max-h-40 peer-checked:max-h-40 '>
                        <div className="p-4">
                            <p>
                                ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                            </p>
                        </div>
                    </div>
                </div>
                <div className='relative w-[80%]  overflow-hidden  '>
                    <input type="checkbox" className='peer top-0 absolute inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' />
                    <div className='border-2 border-green-500 rounded-full h-12 w-full pl-5  flex items-center'>
                        <h1 className='text-lg font-semibold text-green-500 p-6 '>خرید محصولات</h1>
                    </div>
                    <div className='top-3 absolute left-4 text-green-500 transition-transform duration-150 peer-checked:rotate-180'>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>

                    </div>
                    <div className='bg-white overflow-hidden transition-all rounded-xl  duration-500 max-h-0
                 peer-checkout:max-h-40 peer-checked:max-h-40 '>
                        <div className="p-4">
                            <p>
                                ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                            </p>
                        </div>
                    </div>
                </div>
        

            </div>
        </div>
    );
};

export default Content;