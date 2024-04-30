/* eslint-disable react-hooks/exhaustive-deps */
import { RiSettings4Line } from 'react-icons/ri';
import FormInput from '../../../components/Elements/FormInput';
import Button from '../../../components/Elements/Button';
import { useParams } from 'react-router-dom';
import useGetData from '../../../hooks/isGetData';
import { useEffect, useState } from 'react';

export default function UpdatePromosPage() {
   const [promo, setPromo] = useState([]);
   const { getData } = useGetData();
   const { id } = useParams();

   useEffect(() => {
      getData(`promo/${id}`, setPromo);
   }, []);

   return (
      <div className='flex max-w-xl mx-auto pt-3 pb-1'>
         <div className='w-full border px-3 pb-3 pt-3 rounded-md shadow-[0_0_15px_0] overflow-hidden'>
            <div className='flex items-center gap-2 mb-1'>
               <RiSettings4Line
                  size={25}
                  className='text-red-500'
               />
               <h1 className='text-xl font-black font-mono'>Pengaturan Promo</h1>
            </div>
            <div className='border-b-2 mb-3'></div>
            <div className='w-full'>
               <img
                  src=''
                  alt=''
                  className='w-full h-auto rounded-t-md shadow-[0_0_5px_0] mb-1'
               />
               <form className='shadow-[0_0_5px_0] p-3'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                     <div className='w-full'>
                        <FormInput
                           defaultValue={promo.title}
                           htmlFor={'title'}
                           title={'Nama'}
                           name={'title'}
                        />
                        <FormInput
                           defaultValue={promo.description}
                           htmlFor={'description'}
                           title={'Deskripsi'}
                           name={'description'}
                        />
                        <FormInput
                           htmlFor={'imageUrl'}
                           title={'Upload Gambar'}
                           type={'file'}
                           name={'imageUrl'}
                        />
                     </div>
                     <div className='w-full'>
                        <FormInput
                           defaultValue={promo.terms_condition}
                           htmlFor={'terms_condition'}
                           title={'Syarat Kondisi'}
                           name={'terms_condition'}
                        />
                        <FormInput
                           defaultValue={promo.promo_code}
                           htmlFor={'promo_code'}
                           title={'Kode Promo'}
                           name={'promo_code'}
                        />
                        <FormInput
                           defaultValue={promo.minimum_claim_price}
                           htmlFor={'minimum_claim_price'}
                           title={'Klaim Harga Minimum'}
                           type={'number'}
                           name={'minimum_claim_price'}
                        />
                        <FormInput
                           defaultValue={promo.promo_discount_price}
                           htmlFor={'promo_discount_price'}
                           title={'Diskon Harga Promo'}
                           type={'number'}
                           name={'promo_discount_price'}
                        />
                     </div>
                  </div>
                  <Button
                     className='bg-indigo-600 hover:bg-indigo-700 w-full'
                     type='submit'
                  >
                     Edit Promo
                  </Button>
               </form>
            </div>
         </div>
      </div>
   );
}
