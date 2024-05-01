/* eslint-disable react-hooks/exhaustive-deps */
import { RiSettings4Line } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import FormInput from '../../../components/Elements/FormInput';
import Button from '../../../components/Elements/Button';
import useGetData from '../../../hooks/isGetData';
import useUpload from '../../../hooks/isUpload';
import useCreate from '../../../hooks/isCreate';

export default function CreateActivitysPage() {
   const [categories, setCategories] = useState([]);
   const [imageUrl, setImageUrl] = useState([]);
   const { getData } = useGetData();
   const { uploadImage } = useUpload();
   const { create } = useCreate();
   const navigate = useNavigate();

   const handleUpload = async (e) => {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('image', file);
      try {
         const res = await uploadImage('upload-image', formData);
         setImageUrl([...imageUrl, res.data.url]);
      } catch (error) {
         console.log(error);
      }
   };

   const handleCreateActivity = async (e) => {
      e.preventDefault();

      const select = document.getElementById('categoryId');
      const categoryId = select.value;
      if (categoryId === 'Select') {
         return;
      }

      const dataActivity = {
         categoryId: categoryId,
         title: e.target.title.value,
         description: e.target.description.value,
         imageUrls: imageUrl,
         price: Number(e.target.price.value),
         price_discount: Number(e.target.price_discount.value),
         rating: Number(e.target.rating.value),
         total_reviews: Number(e.target.total_reviews.value),
         facilities: e.target.facilities.value,
         address: e.target.address.value,
         province: e.target.province.value,
         city: e.target.city.value,
         location_maps: e.target.location_maps.value,
      };

      if (dataActivity.title.length <= 0) {
         toast.error('Masukan nama activity');
         return;
      } else if (dataActivity.description.length <= 0) {
         toast.error('Masukan deskripsi activity');
         return;
      } else if (dataActivity.imageUrls.length <= 0) {
         toast.error('Masukan gambar activity');
         return;
      } else if (dataActivity.price <= 0) {
         toast.error('Masukan harga activity');
         return;
      } else if (dataActivity.price_discount <= 0) {
         toast.error('Masukan diskon activity');
         return;
      } else if (dataActivity.rating <= 0) {
         toast.error('Masukan rating activity');
         return;
      } else if (dataActivity.total_reviews <= 0) {
         toast.error('Masukan total review activity');
         return;
      } else if (dataActivity.facilities.length <= 0) {
         toast.error('Masukan fasilitas activity');
         return;
      } else if (dataActivity.address.length <= 0) {
         toast.error('Masukan alamat activity');
         return;
      } else if (dataActivity.province.length <= 0) {
         toast.error('Masukan provinsi activity');
         return;
      } else if (dataActivity.city.length <= 0) {
         toast.error('Masukan kota activity');
         return;
      } else if (dataActivity.location_maps.length <= 0) {
         toast.error('Masukan maps activity');
         return;
      }

      const response = await create('create-activity', dataActivity);
      if (response.status === 200) {
         toast.success(response.data.message);
         setTimeout(() => {
            navigate('/dasboard/activity');
         }, 2000);
      }
   };

   useEffect(() => {
      getData('categories', setCategories);
   }, []);

   return (
      <div className='flex max-w-xl mx-auto mt-3'>
         <div className='w-full border px-3 pb-3 pt-3 rounded-md shadow-[0_0_15px_0] overflow-hidden'>
            <div className='flex items-center gap-2 mb-1'>
               <RiSettings4Line
                  size={25}
                  className='text-red-500'
               />
               <h1 className='text-xl font-black font-mono'>Membuat Activity Baru</h1>
            </div>
            <div className='border-b-2 mb-3'></div>
            <div className='w-full'>
               {imageUrl.length > 0 && (
                  <div className='flex justify-center items-center'>
                     <img
                        src={imageUrl}
                        alt='activity'
                        className='w-full h-auto rounded-t-md shadow-[0_0_5px_0] mb-1'
                     />
                  </div>
               )}
               <form
                  onSubmit={handleCreateActivity}
                  className='shadow-[0_0_5px_0] p-3'
               >
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                     <div className='w-full'>
                        <label
                           htmlFor='categoryId'
                           className='text-xs font-bold'
                        >
                           Category ID
                        </label>
                        <select
                           name='categoryId'
                           id='categoryId'
                           className='border rounded-md py-[0.2rem] w-full'
                        >
                           {categories.map((category) => (
                              <option
                                 value={category.id}
                                 key={category.id}
                                 selected={category.id}
                              >
                                 {category.name}
                              </option>
                           ))}
                        </select>
                        <FormInput
                           htmlFor={'title'}
                           title={'Judul Activity'}
                           name={'title'}
                        />
                        <FormInput
                           htmlFor={'description'}
                           title={'Deskripsi'}
                           name={'description'}
                        />
                        <FormInput
                           onChange={handleUpload}
                           htmlFor={'imageUrls'}
                           title={'Upload Gambar'}
                           type={'file'}
                           name={'imageUrls'}
                        />
                        <FormInput
                           htmlFor={'price'}
                           title={'Harga'}
                           type={'number'}
                           name={'price'}
                        />
                        <FormInput
                           htmlFor={'price_discount'}
                           title={'Harga Diskon'}
                           type={'number'}
                           name={'price_discount'}
                        />
                        <FormInput
                           htmlFor={'rating'}
                           title={'Penilaian'}
                           type={'number'}
                           name={'rating'}
                        />
                     </div>
                     <div className='w-full mt-[0.5rem]'>
                        <FormInput
                           htmlFor={'total_reviews'}
                           title={'Total Ulasan'}
                           type={'number'}
                           name={'total_reviews'}
                        />
                        <FormInput
                           htmlFor={'facilities'}
                           title={'Fasilitas'}
                           name={'facilities'}
                        />
                        <FormInput
                           htmlFor={'address'}
                           title={'Alamat'}
                           name={'address'}
                        />
                        <FormInput
                           htmlFor={'province'}
                           title={'Provinsi'}
                           name={'province'}
                        />
                        <FormInput
                           htmlFor={'city'}
                           title={'Kota'}
                           name={'city'}
                        />
                        <FormInput
                           htmlFor={'location_maps'}
                           title={'Lokasi Maps'}
                           name={'location_maps'}
                        />
                     </div>
                  </div>
                  <Button
                     className='bg-indigo-600 hover:bg-indigo-700 w-full mt-1'
                     type='submit'
                  >
                     Membuat actovity
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
