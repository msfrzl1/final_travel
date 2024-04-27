export default function Input({ type = 'text', ...props }) {
   return (
      <input
         {...props}
         autoComplete='on'
         type={type}
         className='border py-1.5 px-2 rounded-md font-semibold text-sm tracking-normal'
      />
   );
}
