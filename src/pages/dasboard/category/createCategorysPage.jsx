import { RiSettings4Line } from 'react-icons/ri';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormInput from '../../../components/Elements/FormInput';
import Button from '../../../components/Elements/Button';
import useUpload from '../../../hooks/isUpload';
import useCreate from '../../../hooks/isCreate';

export default function CreateCategorysPage() {
   const [imageUrl, setImageUrl] = useState(null);
   const { uploadImage } = useUpload();
   const { create } = useCreate();
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

   const handleCreateCategory = async (e) => {
      e.preventDefault();
      const dataCategory = {
         name: e.target.name.value,
         imageUrl: imageUrl,
      };

      if (dataCategory.name.length <= 0) {
         toast.error('Masukan nama category');
         return;
      } else if (dataCategory.imageUrl === null) {
         toast.error('Masukan gambar category');
         return;
      }

      const response = await create('create-category', dataCategory);
      if (response.status === 200) {
         toast.success(response.data.message);
         setTimeout(() => {
            navigate('/dasboard/category');
         }, 2000);
      }
   };

   return (
      <div className={`flex max-w-xl mx-auto ${imageUrl ? 'pt-3' : 'py-16'}`}>
         <div className='w-full border px-3 pb-3 pt-3 rounded-md shadow-[0_0_15px_0] overflow-hidden'>
            <div className='flex items-center gap-2 mb-1'>
               <RiSettings4Line
                  size={25}
                  className='text-red-500'
               />
               <h1 className='text-xl font-black font-mono'>Membuat Category Baru</h1>
            </div>
            <div className='border-b-2 mb-3'></div>

            {imageUrl && (
               <img
                  src={imageUrl}
                  alt='category'
                  className='w-full h-auto rounded-t-md shadow-[0_0_5px_0] mb-1'
               />
            )}

            <div className='w-full'>
               <form
                  onSubmit={handleCreateCategory}
                  className='shadow-[0_0_5px_0] p-3'
               >
                  <FormInput
                     htmlFor={'name'}
                     title={'Nama'}
                     name={'name'}
                     placeholder={'Masukan Nama Banner'}
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
                     Buat Category
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
