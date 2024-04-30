import { Link } from 'react-router-dom';
import { FaSackDollar, FaStar } from 'react-icons/fa6';
import { IoLocation } from 'react-icons/io5';
import { TbCurrencyDollarOff } from 'react-icons/tb';
import Layout from '../../components/Layouts/Layout';

export default function ActivityUser() {
   return (
      <Layout>
         <div className='pt-20 flex flex-col justify-center px-2 md:px-5 pb-4'>
            <div className='flex gap-2 text-xs font-semibold px-2'>
               <Link
                  to='/'
                  className='hover:underline'
               >
                  home
               </Link>
               <div>/</div>
               <div>activity-users</div>
            </div>
            <div className='flex md:flex-row flex-col gap-3 items-center justify-between px-2 py-3'>
               <div className='font-bold text-xl w-full'>
                  <div className='px-2'>Menampikan 10 hasil activity</div>
               </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-[0.7rem]'>
               <div
                  className='px-2 relative'
                  data-aos='zoom-in'
                  data-aos-duration='1000'
               >
                  <div className='rounded-md overflow-hidden border shadow-[0_0_3px_0] flex flex-col my-2'>
                     <Link to={``}>
                        <img
                           src=''
                           alt=''
                           className='w-full h-44 object-cover rounded-t-md'
                        />
                        <div className='absolute bg-white/55 px-1 top-4 right-4 border rounded-xl text-sm font-semibold'>review</div>
                        <div className='absolute bg-white/55 px-1 top-4 left-4 rounded-xl'>
                           <div className='flex items-center gap-1'>
                              <FaStar
                                 size={20}
                                 className='text-yellow-600'
                              />
                              <div className='text-sm font-semibold'>rating</div>
                           </div>
                        </div>
                        <div className='bg-white px-2 py-2 flex flex-col justify-between h-[120px]'>
                           <div className='text-sm font-bold'>title</div>
                           <div className='flex items-center gap-1 text-xs font-semibold'>
                              <IoLocation />
                              <div>province</div>
                           </div>
                           <div className='text-xs'>
                              <div className='flex items-center gap-1'>
                                 <TbCurrencyDollarOff />
                                 <del>price</del>
                              </div>
                              <div className='flex items-center gap-1'>
                                 <FaSackDollar />
                                 <div className='text-green-500'>price_discount</div>
                              </div>
                           </div>
                        </div>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </Layout>
   );
}
