import PlaceContentCenter from '../../components/Elements/PlaceContentCenter';
import FormLogin from '../../components/Fragments/FormLogin';
import Layout from '../../components/Layouts/Layout';

export default function LoginPage() {
   return (
      <Layout>
         <PlaceContentCenter>
            <FormLogin />
         </PlaceContentCenter>
      </Layout>
   );
}
