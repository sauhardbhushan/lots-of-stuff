import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Clock from './components/Clock/Clock';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  errorElement: <h1> Nah nothing here bro </h1>,
  children: [
    {
      path: '/playground',
      element: <Clock/>
    }
  ]
}])
root.render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
);
