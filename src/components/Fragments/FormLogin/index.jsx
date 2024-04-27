import { Link } from 'react-router-dom';
import Button from '../../Elements/Button';
import FormInput from '../../Elements/FormInput';

export default function FormLogin() {
   return (
      <div className='max-w-lg flex flex-col mx-auto border shadow-[0_0_5px_0] rounded-md p-3 overflow-hidden'>
         <div className='text-center mb-5'>
            <div className='text-2xl font-mono font-black tracking-widest'>Selamat datang!</div>
            <div className='text-sm font-semibold'>Masuk sekarang untuk melanjutkan</div>
         </div>
         <form>
            <FormInput
               htmlfor={'email'}
               title={'Email'}
               type={'email'}
               name={'email'}
               placeholder={'example123@mail.com'}
            />
            <FormInput
               htmlfor={'password'}
               title={'Password'}
               type={'password'}
               name={'password'}
               placeholder={'example123@mail.com'}
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
