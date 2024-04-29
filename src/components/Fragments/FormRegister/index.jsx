import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormInput from '../../Elements/FormInput';
import Button from '../../Elements/Button';
import SelectOption from '../../Elements/SelectOption';
import useUpload from '../../../hooks/isUpload';
import useAuth from '../../../hooks/isAuth';
import { FaRegistered } from 'react-icons/fa6';

export default function FormRegister() {
   const [imageUrl, setImageUrl] = useState(null);
   const { uploadImage } = useUpload();
   const { auth } = useAuth();
   const navigate = useNavigate();

   const handleUpload = async (e) => {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('image', file);
      try {
         const response = await uploadImage('upload-image', formData);
         setImageUrl(response.data.url);
      } catch (error) {
         console.log(error);
      }
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      const userData = {
         email: e.target.email.value,
         name: e.target.name.value,
         password: e.target.password.value,
         passwordRepeat: e.target.passwordRepeat.value,
         role: e.target.role.value,
         profilePictureUrl: imageUrl,
         phoneNumber: e.target.phoneNumber.value,
      };
      const response = await auth('register', userData);
      if (response.status === 200) {
         setTimeout(() => {
            navigate('/login');
         }, 2000);
         toast.success(response.data.message);
      } else {
         console.log(response);
         if (response.message === 'Request failed with status code 400') toast.error('Data tidak boleh kosong');
         if (response.message === 'Request failed with status code 409') toast.error(response.response.data.message);
         if (
            userData.password.length <= 6 &&
            userData.passwordRepeat.length <= 6 &&
            userData.password.length > 0 &&
            userData.passwordRepeat.length > 0
         )
            toast.error('Password minimal 6 karakter');
         if (userData.password !== userData.passwordRepeat) toast.error('Password tidak sama');
      }
   };

   return (
      <div className='max-w-2xl flex flex-col mx-auto border shadow-[0_0_5px_0] rounded-md p-3 mb-3 md:mb-0 mt-[3.9rem] overflow-hidden'>
         <div className='text-center mb-5'>
            <FaRegistered
               size={100}
               className='mx-auto text-blue-600 animate-bounce'
            />
            <div className='text-2xl font-mono font-black tracking-widest'>Silahkan registrasi !</div>
            <div className='text-sm font-semibold'>Isi data diri anda untuk melanjutkan</div>
         </div>
         <form onSubmit={handleSubmit}>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-3'>
               <div className='w-full'>
                  <FormInput
                     htmlFor={'email'}
                     title={'E-mail'}
                     type={'email'}
                     name={'email'}
                     placeholder={'contoh123@mail.com'}
                  />
                  <FormInput
                     htmlFor={'name'}
                     title={'Nama'}
                     name={'name'}
                     placeholder={'Nama lengkap / Nama Anda'}
                  />
                  <FormInput
                     htmlFor={'password'}
                     title={'Password'}
                     type={'password'}
                     name={'password'}
                     placeholder={'*******'}
                  />
                  <FormInput
                     htmlFor={'passwordRepeat'}
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
                     onChange={handleUpload}
                     htmlFor={'profilePictureUrl'}
                     title={'Upload Gambar'}
                     type={'file'}
                     name={'profilePictureUrl'}
                  />
                  <FormInput
                     htmlFor={'phoneNumber'}
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
   );
}
