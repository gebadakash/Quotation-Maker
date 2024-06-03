import React, { useState } from 'react';
import logo from "../../assets/images/elioralogo.png";
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const RegistrationForm = () => {

  const [err, setErr] = useState(null);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword:'',
    agreeToTerms: true
  });

  const handleChange = (e) => {
    setFormData(prev => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleSubmit = async (e) => {

    e.preventDefault();


  if (formData.password !== formData.confirmPassword) {
    setErr("Passwords do not match.");
    return;
  }


    console.log("submit: ",formData)

    try{

      console.log("try block...")
      await axios.post("http://localhost:8800/api/auth/register", formData);
      console.log("User register sucessfully...")
      setFormData({
        username:"",
        email:"",
        password:"",
        confirmPassword:""
      });

    }catch(err){

      //console.log(err);
      setErr(err.response.data);
    }
  }

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
                      placeholder="User Name"
                      type="text"
                      id="username"
                      className="form-control"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input
                      name="email"
                      placeholder="Enter address here"
                      type="email"
                      id="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
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
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="confirm-password">Confirm Password</label>
                    <input
                      name="confirmPassword"
                      placeholder="**************"
                      type="password"
                      id="confirm-password"
                      className="form-control"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="check-api-checkbox"
                        className="form-check-input"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                      />
                      <label htmlFor="check-api-checkbox" className="form-check-label">
                        I agree to the <a href="/authentication/sign-up#" style={{textDecoration:"none"}}> Terms of Service </a> and <a href="/authentication/sign-up#" style={{textDecoration:"none"}}> Privacy Policy.</a>
                      </label>
                    </div>
                  </div>
                  <div>
                    <div className="d-grid">
                      <button type="submit" onClick={handleSubmit} className="btn btn-primary" style={{backgroundColor:"#624bff"}}>Create  Account</button>
                    </div>
                    <div className="d-md-flex justify-content-between mt-4">
                      <div className="mb-2 mb-md-0">
                        <NavLink className="fs-6" to="/login" style={{textDecoration:"none"}}>Already member? Login </NavLink>
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

export default RegistrationForm;
