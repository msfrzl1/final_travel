export default function PlaceContentCenter({ children }) {
   return (
      <div className='min-h-screen flex justify-center items-center px-3 antialiased text-slate-800 tracking-tighter z-[-100]'>
         <div className='w-full'>
            <div className='place-content-center'>{children}</div>
         </div>
      </div>
   );
}
