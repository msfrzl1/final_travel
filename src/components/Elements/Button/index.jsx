export default function Button({ children, type = 'sumbit', value, className = 'bg-black', ...props }) {
   return (
      <>
         <button
            {...props}
            type={type}
            className={`${className} text-white py-1 px-3 rounded-full font-semibold tracking-widest`}
         >
            {children || value}
         </button>
      </>
   );
}
