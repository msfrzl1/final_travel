import Input from './Input';
import Label from './Label';

export default function FormInput({ htmlFor, title, type = 'text', ...props }) {
   return (
      <div>
         <Input
            htmlFor={htmlFor}
            title={title}
         />
         <Label
            {...props}
            type={type}
         />
      </div>
   );
}
