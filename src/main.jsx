import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Toaster} from 'react-hot-toast'
import { createBrowserRouter,Navigate ,RouterProvider } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import ProtectedRoute from "./middleware/protectedRoute"
import Login from "./components/Login"

const RedirectToLogin = () => {
  return <Navigate to="/login" replace />;
};

const router = createBrowserRouter([
  {
    path : '/',
    element : <ProtectedRoute><App /></ProtectedRoute>,
    errorElement: <div>Page Not Found</div>,
  },
  {
    path: '/login',
    element : <Login  />
  },
  {
    path: "*",
    element: <RedirectToLogin  />,
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster position='top-center' />
   <RouterProvider router={router} />
  </StrictMode>,
)
