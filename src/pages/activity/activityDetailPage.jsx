/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useParams } from 'react-router-dom';
import { MdPreview } from 'react-icons/md';
import { IoEarth } from 'react-icons/io5';
import { FaSackDollar } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layouts/Layout';
import useGetData from '../../hooks/isGetData';

export default function ActivityDetailUser() {
   const [activity, setActivity] = useState([]);
   const [mapHtml, setMapHtml] = useState('');
   const { getData } = useGetData();
   const { id } = useParams();

   useEffect(() => {
      getData(`activity/${id}`, setActivity);
      getData(`activity/${id}`, (data) => {
         setMapHtml(data.location_maps);
      });
   }, [id]);

   return (
      <Layout>
         <div className='flex flex-col pt-20 pb-5'>
            <div className='flex gap-2 text-xs font-semibold mb-3 px-3'>
               <Link
                  to='/'
                  className='hover:underline'
               >
                  home
               </Link>
               <div>/</div>
               <Link
                  to='/activity-users'
                  className='hover:underline'
               >
                  activity-users
               </Link>
               <div>/</div>
               <div>{activity.title}</div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-3 m-2 gap-2'>
               {activity.imageUrls &&
                  activity.imageUrls.map((image, index) => (
                     <img
                        key={index}
                        src={image}
                        alt={image}
                        className='w-full h-64 object-cover rounded-lg shadow-[0_0_3px_0] p-2'
                     />
                  ))}
            </div>

            <div className='flex flex-col gap-2 border-b-2 pb-5 px-3 m-2'>
               <div className='rounded-lg shadow-[0_0_3px_0] px-2 py-3'>
                  <div className='text-2xl font-bold mb-2'>{activity.title}</div>
                  <div className='flex items-center gap-1'>
                     <div className='text-xl flex items-center gap-1'>
                        <MdPreview
                           size={23}
                           className='text-gray-600'
                        />
                        4.4<span className='text-sm'>/5 44RB+ Terjual</span>
                     </div>
                     <div className='text-sm'>{activity.total_reviews}</div>
                  </div>
                  <div className='flex items-center gap-1 text-sm'>
                     <IoEarth
                        size={23}
                        className='text-gray-600'
                     />
                     <div>{activity.province}</div>
                  </div>
                  <div className='flex items-center gap-1 text-sm pl-7'>
                     <div>{activity.address}</div>
                  </div>
                  <div className='flex items-center mb-3'>
                     <div className='flex items-center gap-2 text-sm'>
                        <FaSackDollar
                           size={20}
                           className='text-gray-600'
                        />
                        <div className=' text-green-500'>{activity.price}</div>
                     </div>
                     <div className='text-sm'>/</div>
                     <div className='text-sm'>
                        <del>{activity.price_discount}</del>
                     </div>
                  </div>
                  <div className='max-w-4xl border rounded p-4 bg-slate-200'>
                     <div className='text-lg font-bold mb-1'>Deskripsi</div>
                     <div className='text-sm'>{activity.description}</div>
                  </div>
               </div>
            </div>

            <div className='px-3 text-2xl font-bold mt-5'>Location</div>
            <div className='mt-5 flex justify-center'>
               <div
                  dangerouslySetInnerHTML={{ __html: mapHtml }}
                  id='map-container'
               />
               {mapHtml.length === 0 && (
                  <div className='w-full'>
                     <div className='w-full flex justify-center items-center h-[354px]'>
                        <h1 className='text-xl font-bold font-mono'>No Map found</h1>
                     </div>
                  </div>
               )}
            </div>
         </div>
      </Layout>
   );
}
