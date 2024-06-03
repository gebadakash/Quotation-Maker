import React, { Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  Navigate,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const Home = React.lazy(()=> import('./components/home/Home'));
const RegistrationForm = React.lazy(() =>
  import("./components/Register/RegistrationForm")
);
const ResetPassword = React.lazy(()=> import("./components/reset password/ResetPassword"))
const Login = React.lazy(()=> import("./components/Login/Login"));
const Dashboard = React.lazy(()=> import("./components/dashboard/Dashboard"));

function App() {
  const ProtectedRoute = ({ children }) => {
    // if (!currentUser) {
    //   return <Navigate to="/login" />;
    // }

    return children;
  };

  const Layout = () => {
    return (

      <>
        <Outlet />
      </>

    );
  };



  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        // {
        //   path: "/profile/:id",
        //   element: <Profile />,
        // },

        {
          
        }

      ],
    },

    {
      path: "/login",
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
      path: "/resetPassword",
      element: (
        <Suspense>
            <ResetPassword/>
        </Suspense>
      ),
    },

    {
      path:"/dashboard",
      element:(
        <Suspense>
            <Dashboard/>
        </Suspense>
      )

    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
