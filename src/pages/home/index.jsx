/* eslint-disable react-hooks/exhaustive-deps */
import { IoIosBarcode } from 'react-icons/io';
import { GiMoneyStack } from 'react-icons/gi';
import { useEffect, useState } from 'react';
import { sliderSettings1 } from '../../components/Elements/SliderSetting';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Layout from '../../components/Layouts/Layout';
import useGetData from '../../hooks/isGetData';

export default function HomePage() {
   const [promos, setPromos] = useState([]);
   const { getData } = useGetData();

   useEffect(() => {
      getData('promos', setPromos);
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
                                       {promo.minimum_claim_price.toLocaleString('id-ID', {
                                          style: 'currency',
                                          currency: 'IDR',
                                       })}
                                    </del>
                                 </div>
                                 <div className='text-green-500'>
                                    {promo.promo_discount_price.toLocaleString('id-ID', {
                                       style: 'currency',
                                       currency: 'IDR',
                                    })}
                                 </div>
                              </div>
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
