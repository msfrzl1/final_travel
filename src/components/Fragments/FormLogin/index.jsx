import { Link } from 'react-router-dom';
import Button from '../../Elements/Button';

export default function FormLogin() {
   return (
      <div className='max-w-lg flex flex-col mx-auto border shadow-[0_0_5px_0] rounded-md p-3 overflow-hidden'>
         <div className='text-center mb-5'>
            <div className='text-2xl font-mono font-black tracking-widest'>Selamat datang!</div>
            <div className='text-sm font-semibold'>Masuk sekarang untuk melanjutkan</div>
         </div>
         <form>
            <div className='flex flex-col gap-1 mb-3'>
               <label
                  htmlFor='email'
                  className='font-bold text-sm'
               >
                  E-mail
               </label>
               <input
                  className='border py-1.5 px-2 rounded-md font-semibold'
                  type='email'
                  name='email'
                  placeholder='example123@mail.com'
               />
            </div>
            <div className='flex flex-col gap-1'>
               <label
                  htmlFor='password'
                  className='font-bold text-sm'
               >
                  Password
               </label>
               <input
                  className='border py-1.5 px-2 rounded-md font-semibold'
                  type='password'
                  name='password'
                  placeholder='********'
               />
            </div>
            <div className='flex justify-center gap-1 py-3 text-sm'>
               <div>Belum punya akun ?</div>
               <Link
                  to='/register'
                  className='font-semibold text-indigo-500 hover:underline'
               >
                  Register
               </Link>
            </div>
            <Button className='w-full bg-indigo-500 hover:bg-indigo-600'>Masuk</Button>
         </form>
      </div>
   );
}
