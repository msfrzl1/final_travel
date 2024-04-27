import { Link } from 'react-router-dom';
import FormInput from '../../Elements/FormInput';
import Button from '../../Elements/Button';
import SelectOption from '../../Elements/SelectOption';

export default function FormRegister() {
   return (
      <div className='max-w-2xl flex flex-col mx-auto border shadow-[0_0_5px_0] rounded-md p-3 mt-16 mb-5 md:mb-0 md:mt-0 overflow-hidden'>
         <div className='text-center mb-5'>
            <div className='text-2xl font-mono font-black tracking-widest'>Silahkan registrasi !</div>
            <div className='text-sm font-semibold'>Isi data diri anda untuk melanjutkan</div>
         </div>
         <form>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-3'>
               <div className='w-full'>
                  <FormInput
                     htmlfor={'email'}
                     title={'E-mail'}
                     type={'email'}
                     name={'email'}
                     placeholder={'contoh123@mail.com'}
                  />
                  <FormInput
                     htmlfor={'name'}
                     title={'Nama'}
                     name={'name'}
                     placeholder={'Nama lengkap / Nama Anda'}
                  />
                  <FormInput
                     htmlfor={'password'}
                     title={'Password'}
                     type={'password'}
                     name={'password'}
                     placeholder={'*******'}
                  />
                  <FormInput
                     htmlfor={'passwordRepeat'}
                     title={'Ulangi Password'}
                     type={'password'}
                     name={'passwordRepeat'}
                     placeholder={'********'}
                  />
               </div>
               <div className='w-full'>
                  <SelectOption
                     htmlFor={'role'}
                     title={'Role'}
                     name={'role'}
                  >
                     <option value={'admin'}>Admin</option>
                     <option value={'user'}>User</option>
                  </SelectOption>
                  <FormInput
                     htmlfor={'profilePictureUrl'}
                     title={'Upload Gambar'}
                     type={'file'}
                     name={'profilePictureUrl'}
                  />
                  <FormInput
                     htmlfor={'phoneNumber'}
                     title={'Nomor Telepon'}
                     type={'number'}
                     name={'phoneNumber'}
                     placeholder={'08xxxxxxx'}
                  />
               </div>
            </div>
            <div className='flex justify-center font-semibold gap-1 pb-3 text-sm'>
               <div>Sudah punya akun ?</div>
               <Link
                  to='/login'
                  className='text-indigo-500 hover:underline'
               >
                  Login
               </Link>
            </div>
            <Button className='w-full bg-indigo-500 hover:bg-indigo-600'>Registrasi</Button>
         </form>
      </div>
   );
}
