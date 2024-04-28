import BannerPage from '../../pages/dasboard/banners/bannersPage';
import UserPage from '../../pages/dasboard/users/usersPage';
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
      children: [
         {
            path: 'users',
            element: <UserPage />,
         },
         {
            path: 'banner',
            element: <BannerPage />,
         },
      ],
   },
];
