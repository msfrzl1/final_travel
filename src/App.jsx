import { useRoutes } from 'react-router-dom';
import { routeList } from './components/Routes/route';

export default function App() {
   const element = useRoutes(routeList);
   return element;
}
