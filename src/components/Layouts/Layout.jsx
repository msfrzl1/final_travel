import Navbar from '../Elements/Navbar';

export default function Layout({ children }) {
   return (
      <div>
         <Navbar />
         {children}
      </div>
   );
}
