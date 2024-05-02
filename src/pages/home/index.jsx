/* eslint-disable react-hooks/exhaustive-deps */
import { IoIosBarcode } from 'react-icons/io';
import { GiCommercialAirplane, GiLoveMystery, GiMoneyStack } from 'react-icons/gi';
import { useEffect, useState } from 'react';
import { sliderSettings1 } from '../../components/Elements/SliderSetting';
import { IoLocation } from 'react-icons/io5';
import { MdLocalActivity } from 'react-icons/md';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Layout from '../../components/Layouts/Layout';
import useGetData from '../../hooks/isGetData';

export default function HomePage() {
   const [promos, setPromos] = useState([]);
   const [activitys, setActivitys] = useState([]);
   const [categories, setCategories] = useState([]);
   const [banners, setBanners] = useState([]);
   const { getData } = useGetData();

   useEffect(() => {
      getData('promos', setPromos);
      getData('activities', setActivitys);
      getData('categories', setCategories);
      getData('banners', setBanners);
      window.scrollTo(0, 0);
   }, []);

   return (
      <Layout>
         <div className='pt-16 min-h-screen lg:min-h-[90vh] flex flex-col justify-center lg:flex-row items-center md:mx-32 mx-5 mb-[4.8rem]'>
            <div
               className='flex flex-col text-center gap-2 max-w-xl'
               data-aos='fade-right'
               data-aos-duration='1000'
            >
               <h1 className='font-semibold text-4xl leading-tight'>Temukan tujuan terbaik</h1>
               <p>Dengan Travel Indigo anda dapat merasakan perjalanan baru dan destinasi wisata terbaik yang kami tawarkan</p>
            </div>
            <div
               data-aos='fade-left'
               data-aos-duration='1000'
            >
               <img
                  src='/image.png'
                  alt='image travel indigo'
                  className='lg:mt-0 w-full'
               />
            </div>
         </div>

         <div className='bg-black pt-20 flex flex-col justify-center px-5 pb-5'>
            <div className='flex items-center gap-2'>
               <h1 className='text-white text-xl font-bold'>Promo spesial</h1>
               <GiMoneyStack
                  className='text-green-500'
                  size={40}
               />
            </div>
            <p className='text-white text-xs mt-2'>&quot;Kunjungi destinasi wisata di berbagai kota bersama indigo dengan harga hemat!&quot;</p>
            <div className='mt-10 '>
               <Slider {...sliderSettings1}>
                  {promos.map((promo) => (
                     <div
                        key={promo.id}
                        className='px-2'
                        data-aos='zoom-in'
                        data-aos-duration='1000'
                     >
                        <div className='rounded-lg shadow-lg overflow-hidden'>
                           <img
                              src={promo.imageUrl}
                              alt={promo.name}
                              className='w-full h-44 object-cover'
                           />
                           <div className='bg-white px-2 py-2 border flex flex-col justify-between h-[150px]'>
                              <div className='text-sm font-bold mb-2'>{promo.title}</div>
                              <div className='flex items-center gap-1 mb-4'>
                                 <IoIosBarcode />
                                 <div className='text-xs font-semibold text-'>{promo.promo_code}</div>
                              </div>
                              <div className='text-xs'>
                                 <div className=''>
                                    <del>
                                       {promo.minimum_claim_price &&
                                          promo.minimum_claim_price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                                    </del>
                                 </div>
                                 <div className='text-green-500'>
                                    {promo.promo_discount_price &&
                                       promo.promo_discount_price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </Slider>
            </div>
         </div>

         <div className='bg-slate-900 pt-20 flex flex-col justify-center px-5 pb-5'>
            <div className='flex items-center gap-2'>
               <h1 className='text-white text-xl font-bold'>Activity spesial ke seluruh dunia</h1>
               <MdLocalActivity
                  className='text-red-500'
                  size={40}
               />
            </div>
            <p className='text-white text-xs mt-2'>&quot;Kunjungi aktivity wisata di berbagai dunia dengan harga hemat!&quot;</p>
            <div className='mt-10'>
               <Slider {...sliderSettings1}>
                  {activitys.map((activity) => (
                     <div
                        key={activity.id}
                        className='px-2'
                        data-aos='zoom-in'
                        data-aos-duration='1000'
                     >
                        <div className='rounded-lg overflow-hidden'>
                           <img
                              src={activity.imageUrls[0] || activity.image[1] || activity.image[2]}
                              alt='activity'
                              className='w-full h-44 object-cover'
                           />
                           <div className='bg-white px-2 py-2 flex flex-col justify-between h-[150px]'>
                              <div className='text-sm font-bold'>{activity.title}</div>
                              <div className='flex items-center gap-1'>
                                 <IoLocation />
                                 <div className='text-xs font-semibold text-'>{activity.province}</div>
                              </div>
                              <div className='text-xs'>
                                 <div className=''>
                                    <del>{activity.price && activity.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</del>
                                 </div>
                                 <div className='text-green-500'>
                                    {activity.price_discount &&
                                       activity.price_discount.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </Slider>
            </div>
         </div>

         <div className='bg-black pt-20 flex flex-col justify-center pb-5'>
            <div className='flex items-center gap-2 px-5'>
               <h1 className='text-white text-xl font-bold'>Destinasi Terpopuler</h1>
               <GiCommercialAirplane
                  className='text-blue-500'
                  size={30}
               />
            </div>
            <p className='text-white text-xs mt-2 px-5'>&quot;Destinasi wisata yang mungkin belum pernah anda alami sebelumnya&quot;</p>
            <div className='mt-10 mx-5 md:mx-32'>
               <Slider {...sliderSettings1}>
                  {categories.map((category) => (
                     <div
                        key={category.id}
                        className='px-2'
                        data-aos='zoom-in'
                        data-aos-duration='1000'
                     >
                        <div className='rounded-lg overflow-hidden relative'>
                           <img
                              src={category.imageUrl}
                              alt={category.name}
                              className='w-full h-44 object-cover'
                           />
                           <div className='absolute bottom-0 left-0 right-0 bg-white px-2 py-1'>
                              <h1 className='text-xs font-semibold'>{category.name}</h1>
                           </div>
                        </div>
                     </div>
                  ))}
               </Slider>
            </div>
         </div>

         <div className='bg-slate-900 pt-20 flex flex-col justify-center pb-5'>
            <div className='flex items-center gap-2 px-5'>
               <h1 className='text-white text-xl font-bold'>temukan apa yang Anda sukai</h1>
               <GiLoveMystery
                  className='text-indigo-500'
                  size={30}
               />
            </div>
            <p className='text-white text-xs mt-2 px-5'>&quot;Mari temukan apa yang Anda sukai dari banner yang kami tawarkan&quot;</p>
            <div className='mt-10 mx-5 md:mx-32'>
               <Slider {...sliderSettings1}>
                  {banners.map((banner) => (
                     <div
                        key={banner.id}
                        className='px-2'
                        data-aos='zoom-in'
                        data-aos-duration='1000'
                     >
                        <div className='rounded-lg overflow-hidden relative'>
                           <img
                              src={banner.imageUrl}
                              alt={banner.name}
                              className='w-full h-44 object-cover'
                           />
                           <div className='absolute bottom-0 left-0 right-0 bg-black px-2 py-1'>
                              <h1 className='text-xs font-semibold text-white'>{banner.name}</h1>
                           </div>
                        </div>
                     </div>
                  ))}
               </Slider>
            </div>
         </div>
      </Layout>
   );
}
