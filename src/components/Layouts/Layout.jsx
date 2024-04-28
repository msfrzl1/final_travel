import Footer from '../Elements/Footer/Footer';
import Navbar from '../Elements/Navbar';

export default function Layout({ children }) {
   return (
      <div>
         <Navbar />
         {children}
         <Footer />
      </div>
   );
}
