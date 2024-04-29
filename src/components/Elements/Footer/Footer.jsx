/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import useGetData from '../../../hooks/isGetData';
import FormInput from '../FormInput';
import Button from '../Button';

export default function Footer() {
   const [categories, setCategories] = useState([]);
   const [banners, setBanners] = useState([]);
   const { getData } = useGetData();

   useEffect(() => {
      getData('categories', setCategories);
      getData('banners', setBanners);
   }, []);

   return (
      <div className='bg-black'>
         <div className='bg-black text-white pl-16'>
            <div className='flex flex-col md:flex-row justify-between py-5 md:mx-28 px-5'>
               <div className='w-full md:w-1/3 mt-2'>
                  <h1 className='font-medium text-sm pb-2'>Indigo</h1>
                  <p className='text-xs'>Dengan Indigo Anda dapat merasakan perjalanan baru dan destinasi wisata terbaik yang kami tawarkan</p>
               </div>
               <div className='mt-2'>
                  <h1 className='font-medium text-sm pb-2'>Destinations</h1>
                  <nav className='flex flex-col gap-2 text-xs'>
                     {categories.map((category, i) => {
                        if (i < 5) {
                           return <div key={category.id}>{category.name}</div>;
                        }
                     })}
                  </nav>
               </div>
               <div className='mt-2 pr-2'>
                  <h1 className='font-medium text-sm pb-2'>Banner</h1>
                  <nav className='flex flex-col gap-2 text-xs'>
                     {banners.map((banner, i) => {
                        if (i < 5) {
                           return <div key={banner.id}>{banner.name}</div>;
                        }
                     })}
                  </nav>
               </div>
               <div className='w-full md:w-1/3 mt-2'>
                  <h1 className='font-medium text-sm text-center pb-2'>Newsletter</h1>
                  <nav className='flex flex-col gap-2 text-xs'>
                     <FormInput placeholder='example.com' />
                     <Button className='bg-orange-500 py-2.5'>Suscribe</Button>
                  </nav>
               </div>
            </div>
         </div>
      </div>
   );
}
