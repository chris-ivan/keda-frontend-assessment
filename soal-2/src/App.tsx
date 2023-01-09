import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import DefaultLayout from './layout/DefaultLayout';
import { redirectIfLoggedIn, redirectIfNotLoggedIn } from './utils/loaders';
import { PATH } from './utils/constant';

import HomePage from './views/HomePage';
import LoginPage from './views/LoginPage';
import ProfilePage from './views/ProfilePage';

// https://reactrouter.com/en/main/routers/create-browser-router
const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: PATH.LOGIN,
        loader: redirectIfLoggedIn,
        element: <LoginPage />,
      },
      {
        path: PATH.PROFILE,
        loader: redirectIfNotLoggedIn,
        element: <ProfilePage />,
      },
    ],
  },
]);

function BaseApp() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default BaseApp;
