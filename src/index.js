import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import SignUp from './components/auth/sign-up/SignUp';
import SignIn from './components/auth/sign-in/SignIn';
import Error from './components/error/Error';
import MyAccount from './components/my-account/MyAccount';
import UpdateProfile from './components/my-account/update-profile/UpdateProfile';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <App />,
        },
        {
          path: "sign-up",
          element: <SignUp />,
        },
        {
            path: "sign-in",
            element: <SignIn />,
          },
          {
            path: "account",
            element: <MyAccount />,
          },
          {
            path: "account/profile",
            element: <UpdateProfile/>
          }
    
      ],
      errorElement: <Error/>
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);


