import { Link, useNavigate } from 'react-router-dom';
import Button from '../../Elements/Button';
import FormInput from '../../Elements/FormInput';
import useAuth from '../../../hooks/isAuth';

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
      if (response.status === 200) {
         setTimeout(() => {
            navigate('/');
         }, 1500);
      } else {
         setTimeout(() => {
            console.log(response.response.data.message);
         }, 1500);
      }
   };
   return (
      <div className='max-w-lg flex flex-col mx-auto border shadow-[0_0_5px_0] rounded-md p-3 overflow-hidden'>
         <div className='text-center mb-5'>
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
      </div>
   );
}
