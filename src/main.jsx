
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";


import './index.css';

import App from './App.jsx';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
     
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
      <RouterProvider router={router}/>
)
