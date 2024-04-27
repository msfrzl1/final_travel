export default function Label({ title, htmlfor }) {
   return (
      <label
         htmlFor={htmlfor}
         className='font-bold text-sm'
      >
         {title}
      </label>
   );
}
