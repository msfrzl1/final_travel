import { FaSackDollar } from 'react-icons/fa6';
import { SiPaperswithcode } from 'react-icons/si';
import { TbCurrencyDollarOff } from 'react-icons/tb';
import { Link } from 'react-router-dom';

export default function PromoUser() {
   return (
      <div className='flex flex-col justify-center px-2 md:px-5 py-4 border'>
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
            <div className='px-2'>Menampikan 10 hasil promo</div>
         </div>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-[0.7rem]'>
            <div
               className='relative shadow-[0_0_3px_0] rounded-md m-2 overflow-hidden'
               data-aos='zoom-in'
               data-aos-duration='1000'
            >
               <Link to={``}>
                  <div className='rounded-t-md overflow-hidden border'>
                     <img
                        src=''
                        alt=''
                        className='w-full h-44 object-cover'
                     />
                  </div>
                  <div className='bg-white px-2 py-2 flex flex-col justify-between h-[120px]'>
                     <div className='text-sm font-bold'>ew</div>
                     <div className='text-xs font-semibold text-'>weqe</div>
                     <div className='text-xs font-semibold flex justify-between items-center'>
                        <div className='flex items-center gap-1'>
                           <SiPaperswithcode />
                           <div>esq</div>
                        </div>
                        <div>
                           <div className='flex items-center gap-1'>
                              <TbCurrencyDollarOff />
                              <del>3213</del>
                           </div>
                           <div className='flex items-center gap-1'>
                              <FaSackDollar />
                              <div className='text-green-500'>3213</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </Link>
            </div>
         </div>
      </div>
   );
}
