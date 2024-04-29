import { RiSettings4Line } from 'react-icons/ri';
import FormInput from '../../../components/Elements/FormInput';
import Button from '../../../components/Elements/Button';
import useUpload from '../../../hooks/isUpload';
import { useState } from 'react';

export default function CreateBannerPage() {
   const [imageUrl, setImageUrl] = useState(null);
   const { uploadImage } = useUpload();
   console.log(imageUrl);

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

   return (
      <div className='flex max-w-xl mx-auto pt-8 md:pt-0 pb-12 md:pb-1'>
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
               src=''
               alt=''
               className='w-full h-auto rounded-t-md shadow-[0_0_5px_0] mb-1'
            />
            <div className='w-full'>
               <form className='shadow-[0_0_5px_0] p-3'>
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
      </div>
   );
}
