import { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { LiaBarsSolid } from 'react-icons/lia';
import { MdOutlineArrowDropDownCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { openModal } from '../../../features/modalLogoutSlice';
import ModalLogout from '../Modal/ModalLogout';

export default function Navbar() {
   const [showMenu, setShowMenu] = useState(false);
   const [dropdownOpen, setDropdownOpen] = useState(false);
   const dispatch = useDispatch();
   const isOpen = useSelector((state) => state.modalLogout.isOpen);
   const user = JSON.parse(localStorage.getItem('user'));

   const toggleButton = () => {
      setShowMenu(!showMenu);
   };

   const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
   };

   return (
      <nav className='bg-slate-100 py-2 fixed w-full shadow-[0_0_3px_0] z-[1000]'>
         <div className='max-w-6xl mx-auto px-3'>
            <div className='flex items-center justify-between'>
               <div className='text-xl font-bold font-mono tracking-widest'>
                  <div>INDIGO</div>
               </div>
               {isOpen ? <ModalLogout /> : null}
               <div className='hidden md:block'>
                  <div className='flex font-semibold text-sm'>
                     <Link
                        to='/'
                        className={`hover:bg-gray-200 ease-in-out duration-200 py-1 px-3 rounded-full cursor-pointer`}
                     >
                        Home
                     </Link>
                     <Link
                        to='/promo-users'
                        className={`hover:bg-gray-200 ease-in-out duration-200 py-1 px-3 rounded-full cursor-pointer`}
                     >
                        Promo
                     </Link>
                     <Link
                        to='/activity-users'
                        className={`hover:bg-gray-200 ease-in-out duration-200 py-1 px-3 rounded-full cursor-pointer`}
                     >
                        Activity
                     </Link>
                     {user?.role === 'admin' && (
                        <Link
                           to='/dasboard/users'
                           className={`hover:bg-gray-200 ease-in-out duration-200 py-1 px-3 rounded-full cursor-pointer`}
                        >
                           Dasboard
                        </Link>
                     )}
                  </div>
               </div>

               <div className='hidden md:block'>
                  {user ? (
                     <>
                        <button
                           onClick={toggleDropdown}
                           className='flex items-center gap-2'
                        >
                           <img
                              src={user?.profilePictureUrl}
                              alt='profile'
                              className='w-10 h-10 rounded-full'
                           />
                           <p className='text-sm font-semibold'>{user?.name}</p>
                           <MdOutlineArrowDropDownCircle />
                        </button>
                        {dropdownOpen && (
                           <div className='absolute top-[60px] w-48 right-5 bg-white shadow-lg rounded-md py-2'>
                              <Link
                                 to=''
                                 className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                              >
                                 Profil
                              </Link>
                              <div
                                 onClick={() => dispatch(openModal())}
                                 className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer'
                              >
                                 Logout
                              </div>
                           </div>
                        )}
                     </>
                  ) : (
                     <div className='flex gap-2 font-semibold text-sm'>
                        <Link
                           to='/login'
                           className='bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded-full'
                        >
                           Login
                        </Link>
                        <Link
                           to='/register'
                           className='bg-yellow-400 hover:bg-yellow-500 text-white py-1 px-3 rounded-full'
                        >
                           Register
                        </Link>
                     </div>
                  )}
               </div>
               <button
                  className='md:hidden'
                  onClick={toggleButton}
               >
                  <svg
                     className='h-6 w-10'
                     fill='none'
                     viewBox='0 0 24 24'
                     stroke='currentColor'
                  >
                     {showMenu ? <CgClose size={25} /> : <LiaBarsSolid size={25} />}
                  </svg>
               </button>
            </div>
            {showMenu && (
               <div className='md:hidden'>
                  <div className='flex flex-col font-semibold text-sm gap-2'>
                     {user ? (
                        <>
                           <button
                              onClick={toggleDropdown}
                              className='flex items-center gap-2'
                           >
                              <img
                                 src={user?.profilePictureUrl}
                                 alt='profile'
                                 className='w-10 h-10 rounded-full'
                              />
                              <p className='text-sm font-semibold'>{user?.name}</p>
                              <MdOutlineArrowDropDownCircle />
                           </button>
                           {dropdownOpen && (
                              <div className='w-full'>
                                 <div className='flex flex-col justify-center items-center mt-2 bg-white shadow-lg rounded-md py-2'>
                                    <Link
                                       to=''
                                       className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                    >
                                       Profil
                                    </Link>
                                    <div
                                       onClick={() => dispatch(openModal())}
                                       className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer'
                                    >
                                       Logout
                                    </div>
                                 </div>
                              </div>
                           )}
                        </>
                     ) : (
                        <div className='flex gap-2 font-semibold text-sm'>
                           <Link
                              to='/login'
                              className='bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded-full'
                           >
                              Login
                           </Link>
                           <Link
                              to='/register'
                              className='bg-yellow-400 hover:bg-yellow-500 text-white py-1 px-3 rounded-full'
                           >
                              Register
                           </Link>
                        </div>
                     )}
                     <Link
                        to='/'
                        className={`hover:bg-gray-200 ease-in-out duration-200 py-1 px-3 rounded-full cursor-pointer`}
                     >
                        Home
                     </Link>
                     <Link
                        to='/promo-users'
                        className={`hover:bg-gray-200 ease-in-out duration-200 py-1 px-3 rounded-full cursor-pointer`}
                     >
                        Promo
                     </Link>
                     <Link
                        to='/activity/users'
                        className={`hover:bg-gray-200 ease-in-out duration-200 py-1 px-3 rounded-full cursor-pointer`}
                     >
                        Acitivity
                     </Link>
                     {user?.role === 'admin' && (
                        <Link
                           to='/dasboard/users'
                           className={`hover:bg-gray-200 ease-in-out duration-200 py-1 px-3 rounded-full cursor-pointer`}
                        >
                           Dasboard
                        </Link>
                     )}
                  </div>
               </div>
            )}
         </div>
      </nav>
   );
}
