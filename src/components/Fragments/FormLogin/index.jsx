import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { FaEye, FaUsersGear } from 'react-icons/fa6';
import { useState } from 'react';
import { IoEyeOffSharp } from 'react-icons/io5';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../../Elements/Button';
import FormInput from '../../Elements/FormInput';
import useAuth from '../../../hooks/isAuth';

export default function FormLogin() {
   const { auth } = useAuth();
   const [showPassword, setShowPassword] = useState(false);
   const navigate = useNavigate();

   const handleShowPassword = () => {
      setShowPassword(!showPassword);
   };

   const handleSumbit = async (e) => {
      e.preventDefault();
      const userData = {
         email: e.target.email.value,
         password: e.target.password.value,
      };
      const response = await auth('login', userData);
      console.log(response);
      if (response.status === 200) {
         setTimeout(() => {
            navigate('/');
         }, 2000);
         toast.success(response.data.message);
      } else {
         toast.error(response.response.data.message);
      }
   };

   window.scrollTo(0, 0);
   return (
      <>
         <div className='max-w-lg flex flex-col mx-auto border shadow-[0_0_5px_0] rounded-md p-3 mt-4'>
            <div className='text-center mb-5'>
               <FaUsersGear
                  size={100}
                  className='mx-auto text-blue-600 animate-bounce'
               />
               <div className='text-2xl font-mono font-black tracking-widest'>Selamat datang!</div>
               <div className='text-sm font-semibold'>Masuk sekarang untuk melanjutkan</div>
            </div>
            <form onSubmit={handleSumbit}>
               <FormInput
                  htmlFor={'email'}
                  title={'Email'}
                  type={'email'}
                  name={'email'}
                  placeholder={'example123@mail.com'}
               />
               <div className='relative'>
                  <FormInput
                     htmlFor={'password'}
                     title={'Password'}
                     type={showPassword ? 'text' : 'password'}
                     name={'password'}
                     placeholder={'********'}
                  />
                  <button
                     onClick={handleShowPassword}
                     type='button'
                     className='absolute top-[30px] right-2 outline-none'
                  >
                     {showPassword ? <FaEye size={20} /> : <IoEyeOffSharp size={20} />}
                  </button>
               </div>
               <div className='flex justify-center font-semibold gap-1 pb-3 text-sm'>
                  <div>Belum punya akun ?</div>
                  <Link
                     to='/register'
                     className='text-indigo-500 hover:underline'
                  >
                     Register
                  </Link>
               </div>
               <Button className='w-full bg-indigo-500 hover:bg-indigo-600'>Masuk</Button>
            </form>
            <ToastContainer
               position='top-center'
               autoClose={1500}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               pauseOnHover
               theme='light'
               transition:Flip
            />
         </div>
      </>
   );
}
