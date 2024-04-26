export default function Button({ children, type, value, className = 'bg-black', ...props }) {
   return (
      <>
         <button
            {...props}
            type={type}
            className={`${className} text-white py-1 px-3 rounded-full`}
         >
            {children || value}
         </button>
      </>
   );
}
