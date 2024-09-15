import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Index';
import AuthProvider from './providers/AuthProvider';
import { Toaster } from 'react-hot-toast';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <div className='w-10/12 mx-auto'> */}
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <Toaster />
    {/* </div> */}
  </StrictMode>,
)
