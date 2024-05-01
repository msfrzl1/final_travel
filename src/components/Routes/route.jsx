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
import ProtectedRoute from './protectedRoute';
import UpdatePromosPage from '../../pages/dasboard/promos/updatePromosPage';
import CreatePromosPage from '../../pages/dasboard/promos/createPromosPage';
import UpdateCategorysPage from '../../pages/dasboard/category/updateCategorysPage';
import CreateCategorysPage from '../../pages/dasboard/category/createCategorysPage';

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
      element: (
         <ProtectedRoute>
            <LayoutDasboard />
         </ProtectedRoute>
      ),
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
            path: 'promo/update-promo/:id',
            element: <UpdatePromosPage />,
         },
         {
            path: 'promo/create-promo',
            element: <CreatePromosPage />,
         },
         {
            path: 'category',
            element: <CategoryPage />,
         },
         {
            path: 'category/update-category/:id',
            element: <UpdateCategorysPage />,
         },
         {
            path: 'category/create-category',
            element: <CreateCategorysPage />,
         },
         {
            path: 'activity',
            element: <ActivityPage />,
         },
      ],
   },
];
