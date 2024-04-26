export default function PlaceContentCenter({ children }) {
   return (
      <div className='min-h-screen flex justify-center items-center px-3 antialiased text-slate-800 tracking-tighter'>
         <div className='max-w-2xl w-full'>
            <div className='place-content-center'>{children}</div>
         </div>
      </div>
   );
}
