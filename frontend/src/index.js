import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Posts from './Pages/Posts';
import Login from './Pages/Login';
import ViewPost from './Pages/ViewPost';
import Registration from './Pages/Registration';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement : <h1>Page not found</h1>
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/posts/:postID',
    element: <Posts />
  },
  {
    path: '/posts',
    element: <ViewPost />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Registration />
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}></RouterProvider>
 </React.StrictMode>
);