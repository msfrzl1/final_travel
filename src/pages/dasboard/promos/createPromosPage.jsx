import { RiSettings4Line } from 'react-icons/ri';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import FormInput from '../../../components/Elements/FormInput';
import Button from '../../../components/Elements/Button';
import useUpload from '../../../hooks/isUpload';
import useCreate from '../../../hooks/isCreate';

export default function CreatePromosPage() {
   const [imageUrl, setImageUrl] = useState(null);
   const { uploadImage } = useUpload();
   const { create } = useCreate();
   const navigate = useNavigate();

   const handleUpload = async (e) => {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('image', file);
      try {
         const response = await uploadImage('upload-image', formData);
         setImageUrl(response.data.url);
      } catch (error) {
         console.log(error);
      }
   };

   const handleCreatePromo = async (e) => {
      e.preventDefault();
      const dataPromo = {
         title: e.target.title.value,
         description: e.target.description.value,
         imageUrl: imageUrl,
         terms_condition: e.target.terms_condition.value,
         promo_code: e.target.promo_code.value,
         promo_discount_price: Number(e.target.promo_discount_price.value),
         minimum_claim_price: Number(e.target.minimum_claim_price.value),
      };

      if (dataPromo.title.length <= 0) {
         toast.error('Masukan nama dengan benar');
         return;
      } else if (dataPromo.description.length <= 0) {
         toast.error('Masukan deskripsi dengan benar');
         return;
      } else if (dataPromo.imageUrl === null) {
         toast.error('Masukan gambar promo dengan benar');
         return;
      } else if (dataPromo.terms_condition.length <= 0) {
         toast.error('Masukan syarat dan ketentuan dengan benar');
         return;
      } else if (dataPromo.promo_code.length <= 0) {
         toast.error('Masukan kode promo dengan benar');
         return;
      } else if (dataPromo.promo_discount_price <= 0) {
         toast.error('Masukan diskon promo dengan benar');
         return;
      } else if (dataPromo.minimum_claim_price <= 0) {
         toast.error('Masukan minimum claim price dengan benar');
         return;
      }

      const response = await create('create-promo', dataPromo);
      if (response.status === 200) {
         toast.success(response.data.message);
         setTimeout(() => {
            navigate('/dasboard/promo');
         }, 2000);
      }
   };

   return (
      <div className='flex max-w-xl mx-auto pt-3 pb-1'>
         <div className='w-full border px-3 pb-3 pt-3 rounded-md shadow-[0_0_15px_0] overflow-hidden'>
            <div className='flex items-center gap-2 mb-1'>
               <RiSettings4Line
                  size={25}
                  className='text-red-500'
               />
               <h1 className='text-xl font-black font-mono'>Membuat Promo Baru</h1>
            </div>
            <div className='border-b-2 mb-3'></div>
            <div className='w-full'>
               {imageUrl && (
                  <img
                     src={imageUrl}
                     alt='promo'
                     className='w-full h-auto rounded-t-md shadow-[0_0_5px_0] mb-1'
                  />
               )}
               <form
                  onSubmit={handleCreatePromo}
                  className='shadow-[0_0_5px_0] p-3'
               >
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                     <div className='w-full'>
                        <FormInput
                           htmlFor={'title'}
                           title={'Nama'}
                           name={'title'}
                        />
                        <FormInput
                           htmlFor={'description'}
                           title={'Deskripsi'}
                           name={'description'}
                        />
                        <FormInput
                           onChange={handleUpload}
                           htmlFor={'imageUrl'}
                           title={'Upload Gambar'}
                           type={'file'}
                           name={'imageUrl'}
                        />
                     </div>
                     <div className='w-full'>
                        <FormInput
                           htmlFor={'terms_condition'}
                           title={'Syarat Kondisi'}
                           name={'terms_condition'}
                        />
                        <FormInput
                           htmlFor={'promo_code'}
                           title={'Kode Promo'}
                           name={'promo_code'}
                        />
                        <FormInput
                           htmlFor={'minimum_claim_price'}
                           title={'Klaim Harga Minimum'}
                           type={'number'}
                           name={'minimum_claim_price'}
                        />
                        <FormInput
                           htmlFor={'promo_discount_price'}
                           title={'Diskon Harga Promo'}
                           type={'number'}
                           name={'promo_discount_price'}
                        />
                     </div>
                  </div>
                  <Button
                     className='bg-indigo-600 hover:bg-indigo-700 w-full mt-1'
                     type='submit'
                  >
                     Buat Promo
                  </Button>
               </form>
            </div>
         </div>
         <ToastContainer
            position='top-center'
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            pauseOnHover
            theme='light'
            transition:Flip
         />
      </div>
   );
}
