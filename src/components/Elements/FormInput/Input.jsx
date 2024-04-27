export default function Input({ type = 'text', ...props }) {
   return (
      <input
         {...props}
         type={type}
         className='border py-1.5 px-2 rounded-md font-semibold'
      />
   );
}
