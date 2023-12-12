import React, { useContext, useState } from 'react';
import auth from '../../public/image/auth.jpg'
import Image from 'next/image';
import { phoneContext } from '../../context/UserNumber';
import Swal from 'sweetalert2'
import { useRouter } from 'next/router';

const Auth = () => {
    const {phone}=useContext(phoneContext)
    const [code,setCode]=useState("")
    const router=useRouter()

    const verifyCode = async (event) => {
        event.preventDefault();
    
        const res = await fetch(`http://abiserve.ir/api/auth/phone_verified`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'sub-domain':'test'
          },
          body: JSON.stringify({ phone, phone_verified_at: +code })
        });
        console.log(res);
    
        if (res.status === 200) {
          // Swal.fire({
          //   title: "با موفقیت وارد شدید",
          //   buttons: "Go to Home",
          //   icon: "success",
          // });
          router.push("/login")
        }
         else if (res.status === 422) {
          Swal.fire({
            title: "ورود ناموفق بود!!",
            buttons: "Try Again",
            icon: "error",
          });
        }
      };
    return (
        <div>
            <div className='w-[700px] rounded-full flex items-center border-b-8 border-current justify-between m-auto shadow-[inset_-1px_1px_10px_#e1e1e1]  h-[500px]'>
                <div >
                <Image src={auth} width={400} height={300} alt='vector' className='mr-14 mt-10  rounded-full'/>
                </div>
                <div className='flex flex-col gap-8 ml-20'>
                    <input type='tel'
                    onChange={(e)=>setCode(e.target.value)}
                     placeholder="کد را وارد کنید" 
                     className='border w-[270px] border-gra-300 px-4 outline-none  py-2.5 rounded-md'/>
                    <button 
                    onClick={verifyCode}
                    className='bg-current text-white w-[270px] py-2 text-current rounded-lg'>ارسال</button>
                </div>
            </div>
        </div>
    );
};

export default Auth;