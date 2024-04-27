export default function SelectOption({ htmlFor, title, children, ...props }) {
   return (
      <div className='flex flex-col gap-1 mb-2'>
         <label
            htmlFor={htmlFor}
            className='font-bold text-sm'
         >
            {title}
         </label>
         <select
            {...props}
            className='border py-1.5 px-2 rounded-md font-semibold text-sm tracking-normal'
         >
            {children}
         </select>
      </div>
   );
}
