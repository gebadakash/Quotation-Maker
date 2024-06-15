import React, { Suspense } from "react";
import {Outlet} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Suspense>
        <ToastContainer position="top-center" />
        <Outlet/>
      </Suspense>
    </>
  );
}

export default App;
