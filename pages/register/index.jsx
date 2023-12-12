import React, { useContext, useState } from 'react'
import Image from 'next/image';
import moonn from '../../public/image/moon.jpg'
import {GiSmartphone} from 'react-icons/gi'
import {FcReddit} from 'react-icons/fc'
import {HiOutlineUser,HiOutlineUsers} from 'react-icons/hi2'
import { useForm } from 'react-hook-form';
import {FaRegGrin} from 'react-icons/fa'
import { phoneContext } from '../../context/UserNumber';
import Link from 'next/link';
import {useRouter} from 'next/router'




const Register = () => {
  const router=useRouter()
    const {register,handleSubmit,formState:{errors}}=useForm()
    
    const {phone,setPhone}=useContext(phoneContext)
    const handelChange=(e)=>{
      setPhone(e.target.value)
    }
    const onsubmit=async(data)=>{
        const newUserInfo={
          first_name:data.first_name,
          last_name:data.last_name,
          phone:data.phone,
          password:data.password
        }
        const requestOptions = {
          method: 'POST',
          headers:{ 'Content-Type': 'application/json','sub-domain':'test' },
          body: JSON.stringify(newUserInfo),
      };
       
        const response = await fetch("http://abiserve.ir/api/auth/register",requestOptions)
            // console.log(response);
             const jsonData = await response.json();
              console.log(jsonData);
              if(jsonData.code="200"){
                router.push("/auth")
              }else{
                <p>لطفا مشخصات رو به درستی وارد کنید</p>
              }
    
      
    }
    return (
       <div className=' h-[600px] mb-10'>
            <div className='w-[800px]  shadow-xl mt-4  m-auto relative rounded-2xl border-t-2 border-gray-400 p-10'>
                <Image  src={moonn} width={400} height={400} alt='Moonblue' className='w-[800px] shadow-xl rounded-b-2xl mt-4 h-[142px]  absolute -bottom-[99px] left-0 '/>
                <div className='bg-black/20 absolute -bottom-[100px] left-0 w-full h-[145px] rounded-b-2xl'></div>
                 <div>
                    <div className='flex justify-around '>
                    <div className='text-center font-bold mt-4 text-sm text-gray-500 '>
                        <h3>ساخت حساب کاربری</h3>
                        <div className='flex gap-2'>
                        <h5 className='mt-2'>خوشحالیم قراره به جمع ما به پیوندی  </h5>
                        <FaRegGrin size={18} className='mt-3 text-gray-700 shadow-xl  animate-spin'/>
                        </div>
                    </div>
                    <div className='flex items-center gap-2  justify-center shadow-xl rounded-sm mt-4 px-8 '>
                        <h3 className='text-gray-600 text-sm'>قبلا ثبت نام کرده اید</h3>
                        <button className='bg-gray-200 text-gray-500 text-xs px-4 py-2 rounded-lg'>وارد شوید</button>
                    </div>
                    </div>
                    <form  onSubmit={handleSubmit(onsubmit)}>
                      <div className='flex p-6 gap-4'>

                    {/* Personal information */}
                    <div className='flex flex-col sm:w-1/2 w-full '>
                      <div className='relative'>
                    <input  
                      
                    {...register("first_name",{
                        required:"فیلد نام اجباری است.",
                        minLength:{
                          value:6,
                          message:"نام حداقل باید 6 کارکتر داشته باشد"
                        }
                    })}
                    placeholder="نام "
                    name='first_name'
                    type="text"
                    className={`outline-none border border=gray-300 w-full px-4 py-2 m-2  rounded-xl`}/>
                    <span className='absolute left-6 top-5 text-gray-600'><HiOutlineUser/></span>
                    <span className='text-[12px]  text-red-500  p-0 mr-10'>{errors.first_name ?.message}</span>
                      </div>
                      <div className='relative'>
                    <input  
                      {...register("last_name",{
                        required:"فیلد نام خانوادگی اجباری است.",
                        minLength:{
                          value:6,
                          message:"نام حداقل باید 6 کارکتر داشته باشد"
                        }
                    })}
                    placeholder="نام خانوادگی"
                    name='last_name'
                    type="tel"
                    className={`outline-none border border=gray-300 w-full px-4 py-2 m-2  rounded-xl`}/>
                    <span className='absolute left-6 top-5 text-gray-600'><HiOutlineUsers/></span>
                    <span className='text-[12px]  text-red-500  p-0 mr-10'>{errors.last_name ?.message}</span>
                    </div>
                    </div>
                    {/* ////// */}




                    <div className='w-1/2 flex flex-col '>
                    <div className='relative'>
                    <input  
                     {...register("password",{
                      required:"فیلد رمز عبور اجباری است.",
                      minLength:{
                        value:6,
                        message:"رمز حداقل باید 6 کارکتر داشته باشد"
                      }})}
                    placeholder="رمز ورود" 
                    name='password'
                    type="tel"
                    className={`outline-none border border=gray-300 w-full px-4 py-2 m-2  rounded-xl`}/>
                    <span className='absolute left-6 top-5 text-gray-600'><GiSmartphone/></span>
                    <span className='text-[12px]  text-red-500  p-0 mr-10'>{errors.password ?.message}</span>
                    </div>
                      <div className='relative'>
                    <input  
                     {...register("phone",{
                      required: "فیلد تلفن اجباری است.",
                       minLength:{
                        value:6,
                        message:"شماره تلفن حداقل باید 6 کارکتر داشته باشد"
                      }})}
                    placeholder="شماره تلفن" 
                    name='phone'
                    type="tel"
                    value={phone}
                    onChange={handelChange}
                    className={`outline-none border border=gray-300 w-full px-4 py-2 m-2  rounded-xl`}/>
                    <span className='absolute left-6 top-5 text-gray-600'><GiSmartphone/></span>
                    <span className='text-[12px]  text-red-500  p-0 mr-10'>{errors.phone ?.message}</span>
                    </div>
                    </div>
                      </div>
                    
                    <div className='px-5'>
                       <button className='w-full overflow-hidden  py-2 text-white bg-blue-500 rounded-lg'>ثبت نام</button>
                    </div>
                    </form>
                       <div className='text-[11px] p-2'>
                            <h1 className='flex gap-2 font-bold text-sm mb-2'> <span><FcReddit size={25} className='-mt-0.5'/></span>سلام کاربر محترم</h1>
                            <p>لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس استفاده کنید</p>
                            <p > ما هرگز اطلاعات محرمانه شما را از طریق ایمیل درخواست نمیکنیم</p>
                            <p>لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید </p>
                        </div>
                     
                 </div>
            </div>
          
            </div>
    );
};

export async function getServerSide(){
 
}
export  default Register