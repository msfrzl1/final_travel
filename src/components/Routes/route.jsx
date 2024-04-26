import LoginPage from '../../pages/login';
import RegisterPage from '../../pages/register';

export const routeList = [
   {
      path: '/login',
      element: <LoginPage />,
   },
   {
      path: '/register',
      element: <RegisterPage />,
   },
];
