import { RiSettings4Line } from 'react-icons/ri';
import FormInput from '../../../components/Elements/FormInput';
import Button from '../../../components/Elements/Button';

export default function CreateCategorysPage() {
   return (
      <div className={`flex max-w-xl mx-auto`}>
         <div className='w-full border px-3 pb-3 pt-3 rounded-md shadow-[0_0_15px_0] overflow-hidden'>
            <div className='flex items-center gap-2 mb-1'>
               <RiSettings4Line
                  size={25}
                  className='text-red-500'
               />
               <h1 className='text-xl font-black font-mono'>Membuat Category Baru</h1>
            </div>
            <div className='border-b-2 mb-3'></div>

            <img
               src={''}
               alt='category'
               className='w-full h-auto rounded-t-md shadow-[0_0_5px_0] mb-1'
            />

            <div className='w-full'>
               <form className='shadow-[0_0_5px_0] p-3'>
                  <FormInput
                     htmlFor={'name'}
                     title={'Nama'}
                     name={'name'}
                     placeholder={'Masukan Nama Banner'}
                  />
                  <FormInput
                     htmlFor={'imageUrl'}
                     title={'Upload Gambar'}
                     type={'file'}
                     name={'imageUrl'}
                  />
                  <Button
                     className='bg-indigo-600 hover:bg-indigo-700 w-full mt-2'
                     type='submit'
                  >
                     Buat Category
                  </Button>
               </form>
            </div>
         </div>
      </div>
   );
}
