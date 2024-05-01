/* eslint-disable react-hooks/exhaustive-deps */
import { MdDeleteForever } from 'react-icons/md';
import { RiSettings4Line } from 'react-icons/ri';
import FormInput from '../../../components/Elements/FormInput';
import Button from '../../../components/Elements/Button';
import { useEffect, useState } from 'react';
import useGetData from '../../../hooks/isGetData';
import { useParams } from 'react-router-dom';

export default function UpdateActivitysPage() {
   const [activity, setActivity] = useState([]);
   const [imageUrl, setImageUrl] = useState([]);
   const [categorys, setCategorys] = useState([]);
   const { getData } = useGetData();
   const { id } = useParams();

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
               <form>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                     <div className='w-full'>
                        <div className='flex flex-col my-2'>
                           <label
                              htmlFor='categoryId'
                              className='text-xs font-bold mb-1'
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
      </div>
   );
}
