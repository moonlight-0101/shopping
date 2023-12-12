import React from 'react';
import img1 from '../../../public/image/moon.jpg'
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import { EffectFade } from 'swiper/modules';

import Category from  "./Category"
;



const Gallery = () => {
  return (
    <div className='m-auto' >
      <div className='max-w-full m-auto px-4 -mt-5'>
    
        <Swiper
          className=' flex   sm:h-[550px] h-[300px] bg-gray-50 '
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
         
         
          <SwiperSlide>
            <div className=' flex h-full m-auto'>
              <div className='w-1/2 p-10 leading-10    mt-10'>
                <h3 className='sm:text-right text-center py-4 sm:text-xl text-[12px] font-bold line-clamp-1 sm:line-clamp-3'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</h3>
                <p className='sm:text-right line-clamp-1 sm:line-clamp-6 text-center sm:ml-10 mt-5 overflow-hidden '>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</p>
                <div className='flex items-center justify-center mt-8 sm:mt-2 sm:justify-start'>
                <button className='w-[160px] h-[30px] text-[12px]  flex items-center justify-center text-center text-white  bg-current rounded-full'> افزودن به سبد خرید</button>

                </div>
              
              </div>
              <div className='sm:w-1/2'>
                <Image src={img1} alt="moon" className=' rounded-lg w-[500px] overflow-hidden mb-4 h-[300px] mt-2  sm:h-[480px] sm:w-full   ' />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=' flex h-full m-auto'>
              <div className='w-1/2 p-10 leading-10   mt-10'>
                <h3 className='sm:text-right text-center py-4 sm:text-xl text-[12px] font-bold line-clamp-1 sm:line-clamp-3'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</h3>
                <p className='sm:text-right line-clamp-1 sm:line-clamp-6 text-center sm:ml-10 mt-5 overflow-hidden '>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</p>
                <div className='flex items-center justify-center mt sm:mt-2 sm:justify-start'>
                <button className='w-[160px] h-[30px] text-[12px]  flex items-center justify-center text-center text-white  bg-current rounded-full'> افزودن به سبد خرید</button>

                </div>
              
              </div>
              <div className='sm:w-1/2'>
                <Image src={img1} alt="voo" className=' rounded-lg w-[500px] overflow-hidden mb-4 h-[300px] mt-2 sm:h-[480px] sm:w-full  ' />
              </div>
            </div>
          </SwiperSlide>
          </Swiper>

          {/* Category */}

          <Category/>
          </div>
      <div className=' '>
        <Swiper
          className=' flex rounded-xl   mx-w-[1200px]  py-10'
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
          spaceBetween={50}
          slidesPerView={3}
      
        >
          <div>
            <SwiperSlide>
              <div className=' w-[150px] sm:w-[320px]  h-[320px] sm:h-[430px] flex flex-col bg-white mr-10 rounded-xl shadow-xl '>
                <div className='text-left mt-12 mx-8 font-bold text-sm sm:text-lg'>iPhone 12</div>
                <div className="flex items-center justify-center w-full h-full">
                  <div>
                    {/* <img src={img3} className='w-[120px] sm:w-[170px] ' alt="" /> */}
                  </div>
                </div>
                <div className='flex justify-between w-full gap-10 p-4 mb-4 items-center'>
                  <p className='w-[150px] text-xs sm:text-sm'>  از ما بهترین محصولات با بهترین کیفیت </p>
                  <button className='w-20 text-[12px] sm:text-sm sm:w-24 h-7 sm:h-10 bg-current rounded-lg text-white'>Buy</button>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=' w-[150px] sm:w-[300px]  h-[320px] sm:h-[430px] flex flex-col bg-white mr-10 rounded-xl shadow-xl '>
                <div className='text-left mt-12 mx-8 font-bold text-sm sm:text-lg'>iPhone 12</div>
                <div className="flex items-center justify-center w-full h-full">
                  <div>
                    {/* <img src={img3} className='w-[120px] sm:w-[170px] ' alt="" /> */}
                  </div>
                </div>
                <div className='flex justify-between w-full gap-10 p-4 mb-4 items-center'>
                  <p className='w-[150px] text-xs sm:text-sm'>  از ما بهترین محصولات با بهترین کیفیت </p>
                  <button className='w-20 text-[12px] sm:text-sm sm:w-24 h-7 sm:h-10 bg-current rounded-lg text-white'>Buy</button>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=' w-[150px] sm:w-[300px]  h-[320px] sm:h-[430px] flex flex-col bg-white mr-10 rounded-xl shadow-xl '>
                <div className='text-left mt-12 mx-8 font-bold text-xs sm:text-lg'>iPhone 12</div>
                <div className="flex items-center justify-center w-full h-full">
                  <div>
                    {/* <img src={img3} className='w-[120px] sm:w-[170px] ' alt="" /> */}
                  </div>
                </div>
                <div className='flex justify-between w-full gap-10 p-4 mb-4 items-center'>
                  <p className='w-[150px] text-xs sm:text-sm'>  از ما بهترین محصولات با بهترین کیفیت </p>
                  <button className='w-20 text-[12px] sm:text-sm sm:w-24 h-7 sm:h-10 bg-current rounded-lg text-white'>Buy</button>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=' w-[150px] sm:w-[300px]  h-[320px] sm:h-[430px] flex flex-col bg-white mr-10 rounded-xl shadow-xl '>
                <div className='text-left mt-12 mx-8 font-bold text-xs sm:text-xl'>iPhone 12</div>
                <div className="flex items-center justify-center w-full h-full">
                  <div>
                    {/* <img src={img3} className='w-[120px] sm:w-[170px] ' alt="" /> */}
                  </div>
                </div>
                <div className='flex justify-between w-full gap-10 p-4 mb-4 items-center'>
                  <p className='w-[150px] text-xs sm:text-sm'>  از ما بهترین محصولات با بهترین کیفیت </p>
                  <button className='w-20 text-[12px] sm:text-sm sm:w-24 h-7 sm:h-10 bg-current rounded-lg text-white'>Buy</button>
                  </div>
              </div>
            </SwiperSlide>
          
          </div>
        </Swiper>
    
      </div>
    </div>
  );
};

export default Gallery;