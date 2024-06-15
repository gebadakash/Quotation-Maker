import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
const Home = React.lazy(() => import("./components/home/Home"));
const Login = React.lazy(() => import("./components/Login/Login"));
const RegistrationForm = React.lazy(() =>import("./components/Register/RegistrationForm"));
const Dashboard = React.lazy(() => import("./components/dashboard/Dashboard"));
const ResetPassword = React.lazy(() =>import("./components/reset password/ResetPassword"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [

      {
        path:"/home",
        element: (<Suspense>
          <Home/>
        </Suspense>)
      },

    {
      path: "/",
      element: (
        <Suspense>
            <Login />
        </Suspense>
      ),
    },

    {
      path: "/register",
      element: (
        <Suspense>
          <RegistrationForm />
        </Suspense>
      ),
    },

    {
      path: "/dashboard",
      element: (
        <Suspense>
          <Dashboard />
        </Suspense>
      ),
    },

    {
      path: "/resetPassword",
      element: (
        <Suspense>
          <ResetPassword />
        </Suspense>
      ),
    },


    ]

  }
])


ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>

)
