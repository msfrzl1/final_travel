/* eslint-disable react-hooks/exhaustive-deps */
import { MdDeleteForever } from 'react-icons/md';
import { RiSettings4Line } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormInput from '../../../components/Elements/FormInput';
import Button from '../../../components/Elements/Button';
import useGetData from '../../../hooks/isGetData';
import useUpload from '../../../hooks/isUpload';
import useUpdate from '../../../hooks/isUpdate';

export default function UpdateActivitysPage() {
   const [activity, setActivity] = useState([]);
   const [imageUrl, setImageUrl] = useState([]);
   const [categorys, setCategorys] = useState([]);
   const { getData } = useGetData();
   const { uploadImage } = useUpload();
   const { update } = useUpdate();
   const { id } = useParams();
   const navigate = useNavigate();

   const handleUpload = async (e) => {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('image', file);
      try {
         const response = await uploadImage('upload-image', formData);
         setImageUrl([...imageUrl, response.data.url]);
      } catch (error) {
         console.log(error);
      }
   };

   const handleUpdateActivity = async (e) => {
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
         imageUrls: imageUrl || activity.imageUrls,
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

      try {
         const response = await update(`update-activity/${id}`, dataActivity);
         if (response.status === 200) {
            toast.success(response.data.message);
            setTimeout(() => {
               navigate('/dasboard/activity');
            }, 2000);
         }
      } catch (error) {
         if (dataActivity.title.length <= 0) {
            toast.error('Masukan nama dengan benar');
         } else if (dataActivity.description.length <= 0) {
            toast.error('Masukan deskripsi dengan benar');
         } else if (dataActivity.price <= 0) {
            toast.error('Masukan harga dengan benar');
         } else if (dataActivity.price_discount <= 0) {
            toast.error('Masukan diskon dengan benar');
         } else if (dataActivity.rating <= 0) {
            toast.error('Masukan rating dengan benar');
         } else if (dataActivity.total_reviews <= 0) {
            toast.error('Masukan total review dengan benar');
         } else if (dataActivity.facilities.length <= 0) {
            toast.error('Masukan fasilitas dengan benar');
         } else if (dataActivity.address.length <= 0) {
            toast.error('Masukan alamat dengan benar');
         } else if (dataActivity.province.length <= 0) {
            toast.error('Masukan provinsi dengan benar');
         } else if (dataActivity.city.length <= 0) {
            toast.error('Masukan kota dengan benar');
         } else if (dataActivity.location_maps.length <= 0) {
            toast.error('Masukan lokasi maps dengan benar');
         }
      }
   };

   useEffect(() => {
      getData(`activity/${id}`, setActivity);
      getData('categories', setCategorys);
   }, []);

   useEffect(() => {
      if (activity.imageUrls) {
         setImageUrl(activity.imageUrls);
      }
   }, [activity]);

   return (
      <div className='flex max-w-4xl mx-auto mt-3'>
         <div className='w-full border px-3 pb-3 pt-3 rounded-md shadow-[0_0_15px_0] overflow-hidden'>
            <div className='flex items-center gap-2 mb-1'>
               <RiSettings4Line
                  size={25}
                  className='text-red-500'
               />
               <h1 className='text-xl font-black font-mono'>Pengaturan Activity</h1>
            </div>
            <div className='border-b-2 mb-3'></div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-3 gap-3'>
               {imageUrl &&
                  imageUrl.map((img, i) => (
                     <div
                        key={i}
                        className='relative w-full aspect-w-3 aspect-h-4'
                     >
                        <img
                           src={img}
                           alt='image'
                           className='w-full h-full object-cover shadow-[0_0_5px_0] rounded-md'
                        />
                        <MdDeleteForever
                           className='absolute bg-white/95 top-2 right-2 text-red-700 hover:text-red-800 border rounded-xl cursor-pointer'
                           size={25}
                        />
                     </div>
                  ))}
            </div>
            <div className='w-full border px-3 pb-3 rounded-md shadow-[0_0_5px_0]'>
               <form onSubmit={handleUpdateActivity}>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                     <div className='w-full'>
                        <div className='flex flex-col my-2'>
                           <label
                              htmlFor='categoryId'
                              className='text-sm font-bold mb-1'
                           >
                              Category ID
                           </label>
                           <select
                              name='categoryId'
                              id='categoryId'
                              className='border rounded-md py-[0.2rem]'
                           >
                              {categorys.map((category) => (
                                 <option
                                    value={category.id}
                                    key={category.id}
                                    selected={category.id === activity.categoryId}
                                 >
                                    {category.name}
                                 </option>
                              ))}
                           </select>
                        </div>
                        <FormInput
                           defaultValue={activity.title}
                           htmlFor={'title'}
                           title={'Judul Activity'}
                           name={'title'}
                        />
                        <FormInput
                           defaultValue={activity.description}
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
                           defaultValue={activity.price}
                           htmlFor={'price'}
                           title={'Harga'}
                           type={'number'}
                           name={'price'}
                        />
                        <FormInput
                           defaultValue={activity.price_discount}
                           htmlFor={'price_discount'}
                           title={'Harga Diskon'}
                           type={'number'}
                           name={'price_discount'}
                        />
                        <FormInput
                           defaultValue={activity.rating}
                           htmlFor={'rating'}
                           title={'Penilaian'}
                           type={'number'}
                           name={'rating'}
                        />
                     </div>
                     <div className='w-full mt-[0.5rem]'>
                        <FormInput
                           defaultValue={activity.total_reviews}
                           htmlFor={'total_reviews'}
                           title={'Total Ulasan'}
                           type={'number'}
                           name={'total_reviews'}
                        />
                        <FormInput
                           defaultValue={activity.facilities}
                           htmlFor={'facilities'}
                           title={'Fasilitas'}
                           name={'facilities'}
                        />
                        <FormInput
                           defaultValue={activity.address}
                           htmlFor={'address'}
                           title={'Alamat'}
                           name={'address'}
                        />
                        <FormInput
                           defaultValue={activity.province}
                           htmlFor={'province'}
                           title={'Provinsi'}
                           name={'province'}
                        />
                        <FormInput
                           defaultValue={activity.city}
                           htmlFor={'city'}
                           title={'Kota'}
                           name={'city'}
                        />
                        <FormInput
                           defaultValue={activity.location_maps}
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
                     Edit Activity
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
