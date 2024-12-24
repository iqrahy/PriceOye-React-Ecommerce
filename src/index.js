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
import ProtectedRoute from './components/protected-component/ProtectedRoute';
import { Provider } from 'react-redux';
import { store } from './app/store';
import ProductDetails from './components/product-details/ProductDetails';


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
            element: <ProtectedRoute> <MyAccount /></ProtectedRoute>,
          },
          {
            path: "account/profile",
            element: <ProtectedRoute><UpdateProfile/></ProtectedRoute> 
          },
          {
            path:"product/:productName",
            element:<ProductDetails/>
          }
    
      ],
      errorElement: <Error/>
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
);


