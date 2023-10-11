import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';
import { getItem } from './LocalStorage';
import bcrypt from 'bcryptjs'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const validate = (e) => {
    e.preventDefault();
    const errors = {};

    if (email.length === 0) {
      errors.email = 'Email is required';
    }

    if (password.length === 0) {
      errors.password = 'Password is required';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    } else {
      setFormErrors({
        email: '',
        password: '',
      });

      const userCredentials = {
        email: email,
        password: password
      };
      axios.post("http://localhost:8080/auth/login",userCredentials).then(response=>{
        const token=response.data.token;
        if (token) {
          localStorage.setItem("token",token)
          localStorage.setItem("email",userCredentials.email);
          const userType=response.data.role;
          localStorage.setItem("role",userType)
              if(userType=="STUDENT"){
                nav("/user-dashboard");
              }
              else if(userType==="INSTRUCTOR"){
                nav('/ins-dashboard')
              }
              else if(userType=="ADMIN"){
                nav('/admin-dashboard')
              }
              else {
                alert("Invalid user role");
              }
            } else {
              alert("Invalid token. Please try again.");
            }
      }).catch(error=>{
        alert(error.response.data)
     
      })
    }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setFormErrors({ ...formErrors, email: '' });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setFormErrors({ ...formErrors, password: '' });
  };

  return (
    
    <body id="bodyh">
    <div className="signup-formq">
    <div className="container">
     <div className="header">
     <div id="me11">
     <img alt="logo1" id="logo1" src="https://img.freepik.com/premium-vector/success-student-consulting_7109-29.jpg"/>
     <h1 id="head1">LearnNeo</h1>
     </div>
     </div>
     <p>Enter Credentials For Login</p>
            <form>
            <div className="input">
            <i className="fa-solid fa-user"></i>
                <input
                  onChange={handleEmailChange}
                  value={email}
                  type="email"
                  placeholder="Enter Email"
                />
                {formErrors.email && <p className="error">{formErrors.email}</p>}
              </div>
              <div className="input">
              <i className="fa-solid fa-user"></i>
                <input
                  onChange={handlePasswordChange}
                  value={password}
                  type="password"
                  placeholder="Password"
                />
                {formErrors.password && <p className="error">{formErrors.password}</p>}
                <span className="password-toggle" onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <FontAwesomeIcon icon={faEyeSlash} />
                ) : (
                  <FontAwesomeIcon icon={faEye} />
                )}
              </span>
              </div>
              <div class="checkbox">
            <input type="checkbox" id="remember"/>
            <label for="remember" id="terms">Remember Me</label>
          </div>
              <button onClick={validate} className="signup-btn" type="submit">Login</button>
            </form>

            <label>SIGN UP!</label><br/>
          <label><Link to="/instructor-signup" className='link'>Instructor</Link>
         </label>
          </div>
        </div>
    </body>
  );
}

export default Login;
