import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
      element:<Home></Home>
      },
      {
        path:"/projects",
      element:<Projects></Projects>
      },
      {
        path:"/contact",
      element:<Contact></Contact>
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div >
    <RouterProvider router={router} />
    </div>
   
  </React.StrictMode>,
)
