/* eslint-disable react-hooks/exhaustive-deps */
import { BiEdit } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import Layout from '../../../components/Layouts/Layout';
import FormInput from '../../../components/Elements/FormInput';
import Button from '../../../components/Elements/Button';
import useAuth from '../../../hooks/isAuth';
import useUpload from '../../../hooks/isUpload';

export default function UpdateUser() {
   const [user, setUser] = useState({});
   const [imageUrl, setImageUrl] = useState(null);
   const { usersAuth } = useAuth();
   const { uploadImage } = useUpload();

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

   useEffect(() => {
      usersAuth('user', setUser);
   }, []);

   return (
      <Layout>
         <div className='px-3 md:pt-[4.8rem] pt-16 pb-1'>
            <div className='w-full md:max-w-4xl mx-auto border shadow-[0_0_15px_0] border-slate-300 rounded-md px-3 py-3 mb-3 overflow-hidden'>
               <div className='flex items-center mb-2 gap-1'>
                  <BiEdit
                     size={25}
                     className='text-red-500'
                  />
                  <h1 className='text-xl font-mono font-bold'>Edit Profile</h1>
               </div>
               <div className='border-b-2 mb-3'></div>
               <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3'>
                  <div className='w-full h-auto flex justify-center'>
                     <div className='flex justify-center items-center'>
                        <img
                           src={imageUrl || user.profilePictureUrl}
                           alt='profile banner'
                           className='w-full h-[300px] md:h-[400px] object-cover shadow-[0_0_5px_0] rounded-md mb-3'
                        />
                     </div>
                  </div>
                  <div className='w-full'>
                     <form className='shadow-[0_0_5px_0] p-3'>
                        <div className='text-gray-400'>
                           <FormInput
                              defaultValue={user.id}
                              htmlFor={'id'}
                              title={'ID'}
                              name={'id'}
                              disabled
                              readOnly
                           />
                        </div>
                        <FormInput
                           defaultValue={user.email}
                           htmlFor={'email'}
                           title={'E-mail'}
                           type={'email'}
                           name={'email'}
                           placeholder={'contoh123@mail.com'}
                        />
                        <FormInput
                           defaultValue={user.name}
                           htmlFor={'name'}
                           title={'Nama'}
                           name={'name'}
                           placeholder={'Nama lengkap / Nama Anda'}
                        />
                        <div className='text-gray-400'>
                           <FormInput
                              defaultValue={user.role}
                              htmlFor={'role'}
                              title={'Peran'}
                              name={'role'}
                              disabled
                              readOnly
                           />
                        </div>
                        <FormInput
                           onChange={handleUpload}
                           htmlFor={'profilePictureUrl'}
                           title={'Upload Gambar'}
                           type={'file'}
                           name={'profilePictureUrl'}
                        />
                        <FormInput
                           defaultValue={user.phoneNumber}
                           htmlFor={'phoneNumber'}
                           title={'Nomor Telepon'}
                           type={'number'}
                           name={'phoneNumber'}
                           placeholder={'08xxxxxxx'}
                        />
                        <Button
                           className='bg-indigo-600 hover:bg-indigo-700 ease-in duration-150'
                           type='submit'
                        >
                           Edit Profile
                        </Button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </Layout>
   );
}
