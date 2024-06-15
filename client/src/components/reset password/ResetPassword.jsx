import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';
import logo from "../../assets/images/elioralogo.png";

const ResetPassword = () => {
  return (
    <div id="__next">
      <div className="d-flex flex-column container">
        <div className="align-items-center justify-content-center g-0 min-vh-100 row">
          <div className="py-8 py-xl-0 col-xxl-4 col-lg-6 col-md-8 col-12 shadow">
            <div className="smooth-shadow-md card">
              <div className="p-6 card-body">
                <div className="mb-4">
                    <a href="/"><img src={logo} alt="" className="mb-2" style={{width:"130px"}}/></a>
                  <p className="mb-6">Please enter your email for reset password.</p>
                </div>
                <form method='post'>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="username">Email</label>
                    <input
                      name="username"
                      placeholder="Enter email address here"
                      type="email"
                      id="username"
                      className="form-control"
                    //   value={formData.username}
                    //   onChange={handleChange}
                    />
                  </div>
                  <div>
                    <div className="d-grid">
                      <button type="submit"  className="btn btn-primary" style={{backgroundColor:"#624bff"}}>Send Verification Code</button>
                    </div>
                    <div className="d-md-flex justify-content-between mt-4">
                      <div className="mb-2 mb-md-0">
                        <NavLink className="fs-6" to="/register" style={{textDecoration:"none"}}>Already member? Login </NavLink>
                      </div>
                      <div>
                        <NavLink className="text-inherit fs-6" to="/register" style={{textDecoration:"none"}}>Create  Account</NavLink>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
