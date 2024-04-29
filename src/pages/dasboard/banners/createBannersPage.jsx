import { RiSettings4Line } from 'react-icons/ri';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import FormInput from '../../../components/Elements/FormInput';
import Button from '../../../components/Elements/Button';
import useUpload from '../../../hooks/isUpload';
import useCreate from '../../../hooks/isCreate';

export default function CreateBannerPage() {
   const [imageUrl, setImageUrl] = useState(null);
   const { uploadImage } = useUpload();
   const { create } = useCreate();
   const navigate = useNavigate();

   const handleUpload = async (e) => {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('image', file);
      try {
         const res = await uploadImage('upload-image', formData);
         setImageUrl(res.data.url);
      } catch (error) {
         console.log(error);
      }
   };

   const handleCreateBanner = async (e) => {
      e.preventDefault();
      const dataBanner = {
         name: e.target.name.value,
         imageUrl: imageUrl,
      };
      if (dataBanner.name.length < 1) {
         toast.error('Masukan nama banner');
         return;
      } else if (dataBanner.imageUrl === null) {
         toast.error('Masukan gambar banner');
         return;
      }

      const response = await create('create-banner', dataBanner);
      if (response.status === 200) {
         toast.success(response.data.message);
         setTimeout(() => {
            navigate('/dasboard/banner');
         }, 2000);
      }
   };

   return (
      <div className='flex max-w-xl mx-auto pt-8 pb-12'>
         <div className='w-full border px-3 pb-3 pt-3 rounded-md shadow-[0_0_15px_0] overflow-hidden'>
            <div className='flex items-center gap-2 mb-1'>
               <RiSettings4Line
                  size={25}
                  className='text-red-500'
               />
               <h1 className='text-xl font-black font-mono'>Membuat Banner Baru</h1>
            </div>
            <div className='border-b-2 mb-3'></div>
            <img
               src={imageUrl}
               alt=''
               className='w-full h-auto rounded-t-md shadow-[0_0_5px_0] mb-1'
            />
            <div className='w-full'>
               <form
                  onSubmit={handleCreateBanner}
                  className='shadow-[0_0_5px_0] p-3'
               >
                  <FormInput
                     htmlFor={'name'}
                     title={'Nama'}
                     name={'name'}
                     placeholder={'Nama lengkap / Nama Anda'}
                  />
                  <FormInput
                     onChange={handleUpload}
                     htmlFor={'imageUrl'}
                     title={'Upload Gambar'}
                     type={'file'}
                     name={'imageUrl'}
                  />
                  <Button
                     className='bg-indigo-600 hover:bg-indigo-700 w-full mt-2'
                     type='submit'
                  >
                     Buat Banner
                  </Button>
               </form>
            </div>
         </div>
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
