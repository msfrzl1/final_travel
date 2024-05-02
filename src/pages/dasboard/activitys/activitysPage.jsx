/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import { MdDeleteForever, MdOutlineLibraryAdd } from 'react-icons/md';
import { RiSettings4Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import useGetData from '../../../hooks/isGetData';
import Button from '../../../components/Elements/Button';
import useDelete from '../../../hooks/isDelete';

export default function ActivityPage() {
   const [activitys, setActivitys] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [activityPerPage] = useState(8);
   const lastActivity = currentPage * activityPerPage;
   const firstActivity = lastActivity - activityPerPage;
   const currentActivity = activitys.slice(firstActivity, lastActivity);
   const { getData } = useGetData();
   const { deleteData } = useDelete();

   const handleNextPage = () => {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
   };

   const handlePrevPage = () => {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
   };

   const handleDelete = async (id) => {
      const response = await deleteData(`delete-activity/${id}`);
      if (response.status === 200) {
         window.location.reload();
      }
   };

   useEffect(() => {
      getData('activities', setActivitys);
      window.scrollTo(0, 0);
   }, []);

   return (
      <div className={activitys.length <= 4 ? 'pb-48' : ''}>
         <div className='flex-col text-center md:flex md:flex-row items-center justify-between pb-2 mb-3 border-b-2'>
            <div className='flex items-center gap-2 mb-1'>
               <RiSettings4Line
                  size={25}
                  className='text-red-500'
               />
               <h1 className='text-xl font-black font-mono'>Pengaturan Banner</h1>
            </div>
            <Link
               to='/dasboard/activity/create-activity'
               className='flex gap-2 items-center'
            >
               <MdOutlineLibraryAdd
                  className=' text-red-400 hover:text-red-500 cursor-pointer'
                  size={20}
               />
               <h1 className='font-semibold text-xs'>Membuat Banner Baru</h1>
            </Link>
         </div>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {currentActivity.map((activity) => (
               <div
                  key={activity.id}
                  className='relative border m-2 rounded-lg overflow-hidden shadow-[0_0_5px_0] transition-transform duration-300 transform hover:scale-[1.01]'
                  data-aos='zoom-in'
                  data-aos-duration='1000'
               >
                  <img
                     src={activity.imageUrls[0]}
                     alt={activity.title}
                     className='w-full h-40 object-cover'
                  />
                  <div className='absolute bottom-0 left-0 right-0 bg-black text-white px-2 py-1'>
                     <h1 className='text-xs font-semibold'>{activity.title}</h1>
                  </div>
                  <Link to={`/dasboard/activity/update-activity/${activity.id}`}>
                     <BiEdit
                        className='absolute bg-white/95 top-2 right-2 text-indigo-700 hover:text-indigo-800 border rounded-xl'
                        size={30}
                     />
                  </Link>
                  <MdDeleteForever
                     onClick={() => handleDelete(activity.id)}
                     className='absolute bg-white/95 top-11 right-2 text-red-700 hover:text-red-800 border rounded-xl cursor-pointer'
                     size={30}
                  />
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
               disabled={currentPage === Math.ceil(activitys.length / activityPerPage)}
               className='bg-slate-800 text-white rounded disabled:bg-gray-700 disabled:text-gray-400'
            >
               Next --&gt;
            </Button>
         </div>
      </div>
   );
}
