import LoginPage from '../../pages/login';
import RegisterPage from '../../pages/register';
import LayoutDasboard from '../Layouts/LayoutDasboard';

export const routeList = [
   {
      path: '/login',
      element: <LoginPage />,
   },
   {
      path: '/register',
      element: <RegisterPage />,
   },
   {
      path: '/dasboard',
      element: <LayoutDasboard />,
   },
];
