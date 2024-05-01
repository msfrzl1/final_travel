/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import { RiSettings4Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import useAuth from '../../../hooks/isAuth';
import ModalRole from '../../../components/Elements/Modal/ModalRole';
import { openModal } from '../../../features/modalRoleSlice';
import Button from '../../../components/Elements/Button';
import FormInput from '../../../components/Elements/FormInput';

export default function UserPage() {
   const [users, setUsers] = useState([]);
   const [userId, setUserId] = useState(null);
   const [searchTerm, setSearchTerm] = useState('');
   const [currentPage, setCurrentPage] = useState(1);
   const [userPerPage] = useState(8);
   const lastUser = currentPage * userPerPage;
   const firstUser = lastUser - userPerPage;
   const { usersAuth } = useAuth();
   const dispatch = useDispatch();
   const isOpen = useSelector((state) => state.modalRole.isOpen);
   const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
   const currentUsers = filteredUsers.slice(firstUser, lastUser);

   const handleUpdateRole = (id) => {
      setUserId(id);
      dispatch(openModal());
   };

   const handleNextPage = () => {
      setCurrentPage(currentPage + 1);
   };

   const handlePrevPage = () => {
      setCurrentPage(currentPage - 1);
   };

   useEffect(() => {
      usersAuth('all-user', setUsers);
      window.scrollTo(0, 0);
   }, []);

   return (
      <div>
         <div className='flex items-center gap-2 mb-3'>
            <RiSettings4Line
               size={25}
               className='text-red-500'
            />
            <div className='text-xl font-black font-mono'>Pengaturan User</div>
         </div>
         <div className='border-b-2 mb-3'></div>
         <div className='flex items-center justify-end gap-2 px-2'>
            <div className='text-xs font-semibold'>Search :</div>
            <FormInput
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               htmlFor='search'
               placeholder='Cari nama pengguna...'
            />
         </div>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {currentUsers.map((user) => (
               <div
                  key={user.id}
                  className='border mb-2 m-2 rounded-lg overflow-hidden shadow-[0_0_5px_0] transition-transform duration-300 transform hover:scale-[1.01]'
                  data-aos='zoom-in'
                  data-aos-duration='1000'
               >
                  <div className='flex justify-center py-2 mb-2 bg-slate-900 rounded-sm'>
                     <img
                        src={user.profilePictureUrl}
                        alt='profile'
                        className='w-16 h-16 rounded-full'
                     />
                  </div>
                  <div className='text-xs px-2 pb-2'>
                     <div className='flex gap-1'>
                        <span className='font-bold'>Nama:</span>
                        <div>{user.name}</div>
                     </div>
                     <div className='flex gap-1'>
                        <span className='font-bold'>E-mail:</span>
                        <div>{user.email}</div>
                     </div>
                     <div className='flex gap-1'>
                        <span className='font-bold'>Nomor Telepon:</span>
                        <div>{user.phoneNumber}</div>
                     </div>
                     <div className='flex gap-1'>
                        <span className='font-bold'>Role:</span>
                        <div>{user.role}</div>
                     </div>
                     <div>
                        <BiEdit
                           onClick={() => handleUpdateRole(user.id)}
                           className='absolute bg-white/95 top-2 right-2 text-red-700 hover:text-red-800 border rounded-xl cursor-pointer'
                           size={25}
                        />
                     </div>
                  </div>
               </div>
            ))}
            {isOpen ? <ModalRole id={userId} /> : ''}
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
               disabled={currentPage === Math.ceil(users.length / userPerPage)}
               className='bg-slate-800 text-white rounded disabled:bg-gray-700 disabled:text-gray-400'
            >
               Next --&gt;
            </Button>
         </div>
      </div>
   );
}
