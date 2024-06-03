import React, { useState } from 'react';
import logo from "../../assets/images/elioralogo.png";
import { NavLink, useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setInputs] = useState({
    username: '',
    password: '',
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!e.target.checkValidity()) {
      toast.warning("Please fill in all required fields.");
      return;
    }

    const { username, password } = inputs;

    try {
      const response = await axios.post(
        "http://localhost:8800/api/auth/login",
        { username, password }
      );
      if (response.status === 200) {
        localStorage.setItem('isLoggedIn', true);
        navigate("/");
      } else {
        setErr(response.data);
      }
    } catch (error) {
      console.log(error);
      setErr(error.response.data);
    }
  };

  return (
    <div id="__next">
      <div className="d-flex flex-column container">
        <div className="align-items-center justify-content-center g-0 min-vh-100 row">
          <div className="py-8 py-xl-0 col-xxl-4 col-lg-6 col-md-8 col-12 shadow">
            <div className="smooth-shadow-md card">
              <div className="p-6 card-body">
                <div className="mb-4">
                    <a href="/"><img src={logo} alt="" className="mb-2" style={{width:"130px"}}/></a>
                  <p className="mb-6">Please enter your user information.</p>
                </div>
                <form method='post'>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="username">Username or email</label>
                    <input
                      name="username"
                      placeholder="Enter address here"
                      type="email"
                      id="username"
                      className="form-control"
                      value={formData.username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input
                      name="password"
                      placeholder="**************"
                      type="password"
                      id="password"
                      className="form-control"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <div className="d-grid">
                      <button type="submit" onSubmit={handleLogin} className="btn btn-primary" style={{backgroundColor:"#624bff"}}>Sign In</button>
                    </div>
                    <div className="d-md-flex justify-content-between mt-4">
                      <div className="mb-2 mb-md-0">
                        <NavLink className="fs-6" to="/register" style={{textDecoration:"none"}}>Create An Account </NavLink>
                      </div>
                      <div>
                        <a className="text-inherit fs-6" href="/authentication/forget-password" style={{textDecoration:"none"}}>Forgot your password?</a>
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

export default Login;
