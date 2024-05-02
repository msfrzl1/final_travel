/* eslint-disable react-hooks/exhaustive-deps */
import { FaSackDollar } from 'react-icons/fa6';
import { SiPaperswithcode } from 'react-icons/si';
import { TbCurrencyDollarOff } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useGetData from '../../hooks/isGetData';
import Layout from '../../components/Layouts/Layout';
import Button from '../../components/Elements/Button';

export default function PromoUser() {
   const [promos, setPromos] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [promoPerPage] = useState(8);
   const lastPromo = currentPage * promoPerPage;
   const firstPromo = lastPromo - promoPerPage;
   const currentPromos = promos.slice(firstPromo, lastPromo);
   const { getData } = useGetData();

   const handleNextPage = () => {
      setCurrentPage(currentPage + 1);
   };

   const handlePrevPage = () => {
      setCurrentPage(currentPage - 1);
   };

   useEffect(() => {
      getData('promos', setPromos);
      window.scrollTo(0, 0);
   }, []);

   return (
      <Layout>
         <div className='flex flex-col justify-center px-2 md:px-5 pt-20 pb-4 border'>
            <div className='flex gap-2 text-xs font-semibold mb-3 px-2'>
               <Link
                  to='/'
                  className='hover:underline'
               >
                  home
               </Link>
               <div>/</div>
               <div>promo-users</div>
            </div>
            <div className='mb-[0.7rem] font-bold text-xl'>
               <div className='px-2'>Menampikan {promos.length} hasil promo</div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-[0.7rem]'>
               {currentPromos.map((promo) => (
                  <div
                     key={promo.id}
                     className='relative shadow-[0_0_3px_0] rounded-md m-2 overflow-hidden'
                     data-aos='zoom-in'
                     data-aos-duration='1000'
                  >
                     <Link to={`/promo-users/${promo.id}`}>
                        <div className='rounded-t-md overflow-hidden border'>
                           <img
                              src={promo.imageUrl}
                              alt={promo.title}
                              className='w-full h-44 object-cover'
                           />
                        </div>
                        <div className='bg-white px-2 py-2 flex flex-col justify-between h-[120px]'>
                           <div className='text-sm font-bold'>{promo.title}</div>
                           <div className='text-xs font-semibold text-'>
                              {promo.description.length > 100 ? promo.description.slice(0, 100) + '...' : promo.description}
                           </div>
                           <div className='text-xs font-semibold flex justify-between items-center'>
                              <div className='flex items-center gap-1'>
                                 <SiPaperswithcode />
                                 <div>{promo.promo_code}</div>
                              </div>
                              <div>
                                 <div className='flex items-center gap-1'>
                                    <TbCurrencyDollarOff />
                                    <del>
                                       {promo.minimum_claim_price &&
                                          promo.minimum_claim_price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                                    </del>
                                 </div>
                                 <div className='flex items-center gap-1'>
                                    <FaSackDollar />
                                    <div className='text-green-500'>
                                       {promo.promo_discount_price &&
                                          promo.promo_discount_price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </Link>
                  </div>
               ))}
            </div>
            <div className='mt-3 flex justify-center'>
               <Button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className='mr-2 py-2 bg-slate-800 text-white rounded disabled:bg-gray-700 disabled:text-gray-400'
               >
                  &lt;-- Prev
               </Button>
               <Button
                  onClick={handleNextPage}
                  disabled={currentPage === Math.ceil(promos.length / promoPerPage)}
                  className='bg-slate-800 text-white rounded disabled:bg-gray-700 disabled:text-gray-400'
               >
                  Next --&gt;
               </Button>
            </div>
         </div>
      </Layout>
   );
}
