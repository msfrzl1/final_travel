export default function Navbar() {
   const navList = [
      { name: 'Home', link: '' },
      { name: 'Promo', link: '' },
      { name: 'Activity', link: '' },
      { name: 'Dasboard', link: '' },
   ];

   return (
      <nav className='bg-slate-300 py-2 fixed w-full z-[1000]'>
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
                           className='hover:bg-slate-100 ease-in-out duration-200 py-1 px-3 rounded-full'
                        >
                           {item.name}
                        </div>
                     ))}
                  </div>
               </div>

               <div className='flex gap-3 font-semibold'>
                  <button className='bg-green-400 hover:bg-green-500 text-white py-1 px-3 rounded-full'>Login</button>
                  <button className='bg-green-400 hover:bg-green-500 text-white py-1 px-3 rounded-full'>Register</button>
               </div>
            </div>
         </div>
      </nav>
   );
}
