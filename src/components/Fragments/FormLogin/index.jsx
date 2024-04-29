import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../../Elements/Button';
import FormInput from '../../Elements/FormInput';
import useAuth from '../../../hooks/isAuth';
import { FaUsersGear } from 'react-icons/fa6';

export default function FormLogin() {
   const { auth } = useAuth();
   const navigate = useNavigate();

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
            navigate('/dasboard/users');
         }, 2000);
         toast.success(response.data.message);
      } else {
         toast.error(response.response.data.message);
      }
   };

   return (
      <>
         <div className='max-w-lg flex flex-col mx-auto border shadow-[0_0_5px_0] rounded-md p-3'>
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
               <FormInput
                  htmlFor={'password'}
                  title={'Password'}
                  type={'password'}
                  name={'password'}
                  placeholder={'********'}
               />
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
