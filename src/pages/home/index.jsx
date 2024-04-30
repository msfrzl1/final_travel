import Layout from '../../components/Layouts/Layout';

export default function HomePage() {
   return (
      <Layout>
         <div className='pt-16 min-h-screen lg:min-h-[90vh] flex flex-col justify-center lg:flex-row items-center md:mx-32 mx-5 mb-[4.8rem]'>
            <div
               className='flex flex-col text-center gap-2 max-w-xl'
               data-aos='fade-right'
               data-aos-duration='1000'
            >
               <h1 className='font-semibold text-4xl leading-tight'>Temukan tujuan terbaik</h1>
               <p>Dengan Travel Indigo anda dapat merasakan perjalanan baru dan destinasi wisata terbaik yang kami tawarkan</p>
            </div>
            <div
               data-aos='fade-left'
               data-aos-duration='1000'
            >
               <img
                  src='/image.png'
                  alt='image travel indigo'
                  className='lg:mt-0 w-full'
               />
            </div>
         </div>
      </Layout>
   );
}
