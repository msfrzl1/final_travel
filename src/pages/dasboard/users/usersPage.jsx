import { BiEdit } from 'react-icons/bi';
import { RiSettings4Line } from 'react-icons/ri';

export default function UserPage() {
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
         <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
            <div className='border rounded-lg overflow-hidden shadow-[0_0_5px_0] transition-transform duration-300 transform hover:scale-[1.01]'>
               <div className='flex justify-center py-2 mb-2 bg-slate-900 rounded-sm'>
                  <img
                     src=''
                     alt='profile'
                     className='w-16 h-16 rounded-full'
                  />
               </div>
               <div className='text-xs px-2 pb-2'>
                  <div>
                     <span className='font-bold'>Nama:</span>
                  </div>
                  <div>
                     <span className='font-bold'>E-mail:</span>
                  </div>
                  <div>
                     <span className='font-bold'>Nomor Telepon:</span>
                  </div>
                  <div>
                     <span className='font-bold'>Role:</span>
                  </div>
                  <div>
                     <BiEdit
                        className='absolute bg-white/95 top-2 right-2 text-red-700 hover:text-red-800 border rounded-xl cursor-pointer'
                        size={25}
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
