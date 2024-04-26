import { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { LiaBarsSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';

export default function Navbar() {
   const [showMenu, setShowMenu] = useState(false);
   const navList = [
      { name: 'Home', link: '' },
      { name: 'Promo', link: '' },
      { name: 'Activity', link: '' },
      { name: 'Dasboard', link: '' },
   ];

   const toggleButton = () => {
      setShowMenu(!showMenu);
   };

   return (
      <nav className='bg-slate-100 py-2 fixed w-full shadow-[0_0_3px_0] z-[1000]'>
         <div className='max-w-7xl mx-auto px-3 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between'>
               <div className='text-xl font-bold font-mono tracking-widest'>
                  <div>INDIGO</div>
               </div>

               <div className='hidden md:block'>
                  <div className='flex font-semibold text-sm'>
                     {navList.map((item, index) => (
                        <div
                           key={index}
                           className='hover:bg-gray-200 ease-in-out duration-200 py-1 px-3 rounded-full cursor-pointer'
                        >
                           {item.name}
                        </div>
                     ))}
                  </div>
               </div>

               <div className='hidden md:block'>
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
                  <div className='flex flex-col font-semibold text-sm'>
                     {navList.map((item, index) => (
                        <div
                           key={index}
                           className='hover:bg-gray-200 ease-in-out duration-200 py-1 px-3 rounded-full cursor-pointer'
                        >
                           {item.name}
                        </div>
                     ))}
                  </div>
                  <div className='flex gap-2 font-semibold text-sm py-1'>
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
               </div>
            )}
         </div>
      </nav>
   );
}
