import Input from './Input';
import Label from './Label';

export default function FormInput({ htmlFor, title, type = 'text', ...props }) {
   return (
      <div className='flex flex-col gap-1 mb-3'>
         <Label
            htmlFor={htmlFor}
            title={title}
         />
         <Input
            {...props}
            type={type}
         />
      </div>
   );
}
