import ActivityUser from '../../pages/activity/activityPage';
import ActivityDetailUser from '../../pages/activity/activityDetailPage';
import ActivityPage from '../../pages/dasboard/activitys/activitysPage';
import BannerPage from '../../pages/dasboard/banners/bannersPage';
import CreateBannerPage from '../../pages/dasboard/banners/createBannersPage';
import UpdateBannersPage from '../../pages/dasboard/banners/updateBannersPage';
import CategoryPage from '../../pages/dasboard/category/categorysPage';
import PromoPage from '../../pages/dasboard/promos/promosPage';
import UserPage from '../../pages/dasboard/users/usersPage';
import HomePage from '../../pages/home';
import LoginPage from '../../pages/login';
import PromoDetailUser from '../../pages/promo/promoDetailPage';
import PromoUser from '../../pages/promo/promoPage';
import RegisterPage from '../../pages/register';
import LayoutDasboard from '../Layouts/LayoutDasboard';
import UpdateUser from '../../pages/dasboard/users/updateUserPage';

export const routeList = [
   {
      path: '/',
      element: <HomePage />,
   },
   {
      path: '/promo-users',
      element: <PromoUser />,
   },
   {
      path: '/promo-users/:id',
      element: <PromoDetailUser />,
   },
   {
      path: '/activity-users',
      element: <ActivityUser />,
   },
   {
      path: '/activity-users/:id',
      element: <ActivityDetailUser />,
   },
   {
      path: '/login',
      element: <LoginPage />,
   },
   {
      path: '/register',
      element: <RegisterPage />,
   },
   {
      path: 'users/:id',
      element: <UpdateUser />,
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
         {
            path: 'banner/update-banner/:id',
            element: <UpdateBannersPage />,
         },
         {
            path: 'banner/create-banner',
            element: <CreateBannerPage />,
         },
         {
            path: 'promo',
            element: <PromoPage />,
         },
         {
            path: 'category',
            element: <CategoryPage />,
         },
         {
            path: 'activity',
            element: <ActivityPage />,
         },
      ],
   },
];
