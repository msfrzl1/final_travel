/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import { MdDeleteForever, MdOutlineLibraryAdd } from 'react-icons/md';
import { RiSettings4Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import useGetData from '../../../hooks/isGetData';
import useDelete from './../../../hooks/isDelete';
import Button from '../../../components/Elements/Button';

export default function CategoryPage() {
   const [categorys, setCategorys] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [categoryPerPage] = useState(8);
   const lastCategory = currentPage * categoryPerPage;
   const firstCategory = lastCategory - categoryPerPage;
   const currentCategory = categorys.slice(firstCategory, lastCategory);
   const { getData } = useGetData();
   const { deleteData } = useDelete();

   const handleDelete = async (id) => {
      const response = await deleteData(`delete-category/${id}`);
      if (response.status === 200) {
         window.location.reload();
      }
   };

   const handleNextPage = () => {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
   };

   const handlePrevPage = () => {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
   };

   useEffect(() => {
      getData('categories', setCategorys);
      window.scrollTo(0, 0);
   }, []);

   return (
      <div className={currentCategory.length <= 4 ? 'pb-44' : ''}>
         <div className='flex-col text-center md:flex md:flex-row items-center justify-between pb-2 mb-3 border-b-2'>
            <div className='flex items-center gap-2 mb-1'>
               <RiSettings4Line
                  size={25}
                  className='text-red-500'
               />
               <h1 className='text-xl font-black font-mono'>Pengaturan Category</h1>
            </div>
            <Link
               to='/dasboard/category/create-category'
               className='flex gap-2 items-center'
            >
               <MdOutlineLibraryAdd
                  className=' text-red-400 hover:text-red-500 cursor-pointer'
                  size={20}
               />
               <h1 className='font-semibold text-xs'>Membuat Category Baru</h1>
            </Link>
         </div>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {currentCategory.map((category) => (
               <div
                  key={category.id}
                  className='relative border m-2 rounded-lg overflow-hidden shadow-[0_0_5px_0] transition-transform duration-300 transform hover:scale-[1.01]'
                  data-aos='zoom-in'
                  data-aos-duration='1000'
               >
                  <img
                     src={category.imageUrl}
                     alt={category.name}
                     className='w-full h-40 object-cover'
                  />
                  <div className='absolute bottom-0 left-0 right-0 bg-black text-white px-2 py-1'>
                     <h1 className='text-xs font-semibold'>{category.name}</h1>
                  </div>
                  <Link to={`/dasboard/category/update-category/${category.id}`}>
                     <BiEdit
                        className='absolute bg-white/95 top-2 right-2 text-indigo-700 hover:text-indigo-800 border rounded-xl'
                        size={30}
                     />
                  </Link>
                  <MdDeleteForever
                     onClick={() => handleDelete(category.id)}
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
               disabled={currentPage === Math.ceil(categorys.length / categoryPerPage)}
               className='bg-slate-800 text-white rounded disabled:bg-gray-700 disabled:text-gray-400'
            >
               Next --&gt;
            </Button>
         </div>
      </div>
   );
}
