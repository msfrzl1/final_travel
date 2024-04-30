/* eslint-disable react-hooks/exhaustive-deps */
import { RiSettings4Line } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormInput from '../../../components/Elements/FormInput';
import Button from '../../../components/Elements/Button';
import useUpload from '../../../hooks/isUpload';
import useGetData from '../../../hooks/isGetData';
import useUpdate from '../../../hooks/isUpdate';

export default function UpdateBannersPage() {
   const [imageUrl, setImageUrl] = useState('');
   const [banner, setBanner] = useState({});
   const { uploadImage } = useUpload();
   const { getData } = useGetData();
   const { update } = useUpdate();
   const { id } = useParams();
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

   const handleUpdateBanner = async (e) => {
      e.preventDefault();
      const dataBanner = {
         name: e.target.name.value,
         imageUrl: imageUrl || banner.imageUrl,
      };
      try {
         const response = await update(`update-banner/${id}`, dataBanner);
         if (response.status === 200) {
            toast.success(response.data.message);
            setTimeout(() => {
               navigate('/dasboard/banner');
            }, 2000);
         }
      } catch (error) {
         if (dataBanner.name.length <= 0) {
            toast.error('Masukan nama banner');
         }
      }
   };

   useEffect(() => {
      getData(`banner/${id}`, setBanner);
   }, []);

   return (
      <div className='flex max-w-xl mx-auto pb-1'>
         <div className='w-full border px-3 pb-3 pt-3 rounded-md shadow-[0_0_15px_0] overflow-hidden'>
            <div className='flex items-center gap-2 mb-1'>
               <RiSettings4Line
                  size={25}
                  className='text-red-500'
               />
               <h1 className='text-xl font-black font-mono'>Pengaturan Banner</h1>
            </div>
            <div className='border-b-2 mb-3'></div>
            <img
               src={imageUrl || banner.imageUrl}
               alt={banner.name}
               className='w-full h-auto rounded-t-md shadow-[0_0_5px_0] mb-1'
            />
            <div className='w-full'>
               <form
                  onSubmit={handleUpdateBanner}
                  className='shadow-[0_0_5px_0] p-3'
               >
                  <FormInput
                     defaultValue={banner.name}
                     htmlFor={'name'}
                     title={'Nama'}
                     name={'name'}
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
                     Edit Banner
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
