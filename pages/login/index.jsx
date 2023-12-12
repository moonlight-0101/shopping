import React, { useContext, useState } from 'react';
import {PiEyeClosed} from 'react-icons/pi'
import {BsEye} from 'react-icons/bs'
import {FcReddit} from 'react-icons/fc'
import {GiSmartphone} from 'react-icons/gi'
import moon from "../../public/image/moonL.jpg"
import Image from 'next/image';
import {useForm} from 'react-hook-form'
import axios from 'axios';
import Swal from 'sweetalert2'
import Cookies from 'universal-cookie';



const Login = () => {
    const{register,handleSubmit,formState:{errors},watch}=useForm()
    const onsubmit= async(data)=>{
        const newUserInfo={
            phone:data.phone,
            password:data.password
        }
    
        const requestOptions = {
            method: 'POST',
            headers:{ 'Content-Type': 'application/json','sub-domain':'test' },
            body: JSON.stringify(newUserInfo),
        };

        
        const response = await fetch("http://abiserve.ir/api/auth/login", requestOptions);
        const jsonData = await response.json();
        const tokenUser=jsonData.data 
        const token =tokenUser.user_token 
        const cookie=new Cookies()
        cookie.set("token",token)
       if(jsonData.code==200){
        Swal.fire({
              title: "با موفقیت وارد شدید",
              buttons: "Go to Home",
              icon: "success",
            })
       }
    }

    const [password, setPassword] = useState("");
     const [type, setType] = useState('password');
      const [icon, setIcon] = useState(PiEyeClosed);
      

    const handleToggle =()=>{
        if (type==='password'){
            setIcon(BsEye);
            setType('text')
         } else {
            setIcon(PiEyeClosed)
            setType('password')
         }
    }
    return (
        <div>
            <div className='w-[700px] flex m-auto my-10 rounded-xl overflow-hidden shadow-2xl'>
                <div className='hidden sm:w-[400px] sm:flex  relative' >
                    <Image src={moon} width={400} height={400} className='h-full' alt='blueimg'/>
                    <div className='bg-black/30 absolute bottom-0 left-0 w-full h-full '></div>
                </div>
                <div  className='w-[400px] shadow-xl sm:w-[500px] m-auto mr-10 sm:mr-0 p-4'>
                    <div className='text-center font-bold mt-4 text-sm text-gray-700 '>
                        <h3>ورود به حساب کاربری</h3>
                        <h5 className='mt-2'>خوشحالم دوباره میبینمت دوست عزیز :)</h5>
                    </div>
                    <div className='flex items-center gap-2 justify-center bg-gray-200 rounded-lg py-3 m-auto my-4 w-[310px]'>
                        <h3>کاربر جدید هستید؟</h3>
                        <button className='bg-gray-400 text-white text-xs px-4 py-2 rounded-lg'>ثبت نام</button>
                    </div>
                    <form onSubmit={handleSubmit(onsubmit)}>
                        <ul>
                                <li className='flex relative rounded-xl'> 
                                <input 
                                {...register("phone",{
                                    required:"فیلد شماره تلفن اجباری است.",
                                    //  pattern:{
                                    //     value:/+989|9|09)(12|19|35|36|37|38|39|32)\d{7}/g,
                                    //     message:"فرمت شماره تلفن نادرست می باشد"
                                    //  }
                                })} 
                                placeholder="شماره تلفن" 
                                name='phone'
                                type="tel"
                                className={`outline-none border border=gray-300 w-full px-4 py-2 m-2  rounded-xl ${errors.phone?"border border-red-400":""}`}/>
                                 <span className='absolute left-6 top-5 text-gray-600'><GiSmartphone/></span>
                                </li>
                                <span className='text-[12px]  text-red-500  p-0 mr-10'>{errors.phone?.message}</span>
                            <li className='flex relative rounded-xl'> 
                                <input {...register("password",{
                                    required:"فیلد رمز عبور اجباری است.",
                                    minLength:{
                                        value:5,
                                        message:"رمز ورود حداقل باید پنچ کارکتر داشته باشد"
                                    },
                                   
                                })} 
                                  name='password'
                                  type={type}
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                 placeholder="رمز ورود" 
                            
                                 className={`outline-none border border=gray-300 w-full px-4 py-2 m-2  rounded-xl ${errors.password ?"border border-red-400":""}`}/>
                                <span className='absolute left-6 top-5 text-gray-600 ' 
                                >{icon}</span>
                            </li>
                              <span className='text-[12px]  text-red-500  p-0 mr-10'>{errors.password ?.message}</span>

                            <li className='m-4'>
                                <button className=' w-full overflow-hidden  py-2 text-white bg-blue-400 rounded-lg'>عضویت</button>
                            </li>
                        </ul>
                        <div className='text-[11px] p-2'>
                            <h1 className='flex gap-2 font-bold text-sm mb-2'> <span><FcReddit size={25} className='-mt-0.5'/></span>سلام کاربر محترم</h1>
                            <p>لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس استفاده کنید</p>
                            <p className='my-4'> ما هرگز اطلاعات محرمانه شما را از طریق ایمیل درخواست نمیکنیم</p>
                            <p>لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید </p>
                        </div>

                    </form>

                </div>

            </div>
        </div>
    );
};

export default Login;