import Button from '../Button';

export default function Navbar() {
   const navList = [
      { name: 'Home', link: '' },
      { name: 'Promo', link: '' },
      { name: 'Activity', link: '' },
      { name: 'Dasboard', link: '' },
   ];

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

               <div className='flex gap-2 font-semibold'>
                  <Button
                     value={'Login'}
                     className='bg-green-500 hover:bg-green-600'
                  />
                  <Button
                     value={'Register'}
                     className='bg-yellow-400 hover:bg-yellow-500'
                  />
               </div>
            </div>
         </div>
      </nav>
   );
}
