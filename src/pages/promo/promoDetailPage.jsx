import { Link } from 'react-router-dom';
import Layout from '../../components/Layouts/Layout';

export default function PromoDetailUser() {
   return (
      <Layout>
         <div className='flex gap-2 text-xs font-semibold mb-3 px-3 pt-20'>
            <Link
               to='/'
               className='hover:underline'
            >
               home
            </Link>
            <div>/</div>
            <Link
               to='/promo'
               className='hover:underline'
            >
               promo-users
            </Link>
            <div>/</div>
            <div>asas</div>
         </div>
         <div className='flex flex-col md:flex-row gap-4 px-4 pb-5'>
            <div className='md:w-1/2'>
               <img
                  src=''
                  alt=''
                  className='w-full h-96 object-cover rounded-lg shadow-[0_0_3px_0]'
               />
            </div>
            <div className='flex-1 bg-white rounded-lg shadow-[0_0_3px_0] p-4'>
               <h1 className='text-2xl font-semibold mb-2'>sasa</h1>
               <div className='mb-2 text-sm'>
                  <span className='font-semibold'>Minimum Claim Price:</span>
                  <span className='ml-2 text-indigo-600'>sasa</span>
               </div>
               <div className='mb-2 text-sm'>
                  <span className='font-semibold'>Discount Price:</span>
                  <span className='ml-2 text-indigo-600'>sasa</span>
               </div>
               <div className='mb-4 text-sm'>
                  <span className='font-semibold'>Promo Code:</span>
                  <span className='ml-2 text-indigo-500'>asasa</span>
               </div>
               <div className='max-w-4xl border rounded p-4 bg-slate-200'>
                  <div className='text-lg font-bold mb-1'>Deskripsi</div>
                  <div className='text-sm mb-4'>sasa</div>
                  <div className='text-lg font-bold mb-1'>Syarat Kondisi</div>
                  <p className='text-sm'>sasa</p>
               </div>
            </div>
         </div>
      </Layout>
   );
}
