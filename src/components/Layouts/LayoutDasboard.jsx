import { Link, Outlet } from 'react-router-dom';
import { FaUserSecret } from 'react-icons/fa';
import { GiVerticalBanner } from 'react-icons/gi';
import { CgDollar } from 'react-icons/cg';
import { TbCategory2 } from 'react-icons/tb';
import { BsActivity } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';
import Layout from './Layout';

export default function AuthLayoutDasbord() {
   const path = useLocation().pathname;

   const sideList = [
      { icon: <FaUserSecret size={25} />, name: 'Users', link: '/dasboard/users' },
      { icon: <GiVerticalBanner size={25} />, name: 'Banner', link: '/dasboard/banner' },
      { icon: <CgDollar size={25} />, name: 'Promo', link: '/dasboard/promo' },
      { icon: <TbCategory2 size={25} />, name: 'Category', link: '/dasboard/category' },
      { icon: <BsActivity size={25} />, name: 'Activity', link: '/dasboard/activity' },
   ];

   return (
      <Layout>
         <div className='flex'>
            <div className='h-screen border-r bg-white border-gray-200 shadow-[0_0_5px_0] w-[4.2rem] md:w-44 pt-[4rem] fixed z-[100]'>
               <h1 className='font-bold font-mono text-xl text-center pb-10 hidden md:block'>Dasboard</h1>
               <div className='flex flex-col items-center md:mx-auto md:pt-0 pt-20 space-y-5 px-1 md:px-2 w-full'>
                  {sideList.map((item, index) => (
                     <div
                        key={index}
                        className={`hover:bg-gray-300 ease-in-out duration-200 w-full py-1 rounded-lg cursor-pointer px-3 ${
                           path === item.link ? 'bg-gray-300' : ''
                        }`}
                     >
                        <Link
                           to={item.link}
                           className='flex flex-row items-center py-2'
                        >
                           <div className='mr-3'>{item.icon}</div>
                           <div className='font-semibold text-xs tracking-wider hidden md:block'>{item.name}</div>
                        </Link>
                     </div>
                  ))}
               </div>
            </div>
            <div className='w-full pt-[4rem] pl-16 md:pl-44'>
               <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-lg mb-4'>
                  <Outlet />
               </div>
            </div>
         </div>
      </Layout>
   );
}
