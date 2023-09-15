import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../Assets/Login.css";
function Login() {
  const [email,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const nav=useNavigate();
  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };
    const validate=(e)=>{
      e.preventDefault();
      if(email.length===0||password.length===0){
        alert("Kindly Enter EmailId and Password");
      }
      else if (!validateEmail(email)) {
        alert('Invalid email address');
      } 
      else{
      nav("/")
    }
  }
  return (
    <div id="body">
    <div className="signup-form">
    <div className="container">
      <div className="header">
      <div id="me1">
      <img alt="logo1" id="logo1" src="https://img.freepik.com/premium-vector/success-student-consulting_7109-29.jpg"/>
      <h1 id="head1">LearnNeo</h1></div>
        <p>Enter Credentials For Login</p>
      </div>
   
      <form>
        <div className="input">
          <i className="fa-solid fa-user"></i>
          <input type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="Enter Email" />
        </div>
        <div className="input">
          <i className="fa-solid fa-lock"></i>
          <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
          </div>
          <div class="checkbox">
            <input type="checkbox" id="remember"/>
            <label for="remember" id="terms">Remember Me</label>
          </div>
          <input onClick={validate} className="signup-btn" type="submit" value="LOGIN" />
          </form>
          <label>SIGN UP!</label><br/>
          <label><Link to="/register" className='link'>Student</Link> Or <Link to="/instructor" className='link'>Instructor</Link>
         </label>
    </div>
  </div>
  </div>
  )
}

export default Login