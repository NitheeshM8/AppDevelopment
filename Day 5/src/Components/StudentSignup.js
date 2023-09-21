import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
function StudentRegister() {
  const [email,setEmail]=useState('');
  const [name,setName]=useState('');
  const [password,setPassword]=useState('');
  const [Conpassword,setconPassword]=useState('');
  const [isChecked,setIsChecked]=useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const nav=useNavigate();
  const check=()=>{
        setIsChecked(!isChecked);
  }
  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const validate=(e)=>{
    e.preventDefault();
    if(email.length===0||password.length===0||name.length===0){
      alert("Kindly Enter All Details");
    }
    else if(password!==Conpassword){
      alert("Enter check Password correctly");
    }
    else if(password.length<8){
      alert("Password must be minimum of 8 charcters");
    }
    else if (!validateEmail(email)) {
      alert('Invalid email address');
    } 
    else if(!isChecked){
        alert("Please Verify Terms and Conditions")
    }
    else{
        nav('/login')
    }
  }
  return (
    <div id="body">
    <div className='signup-form'>
  <div className='container'>
    <div className='header'>
      <div id='me'>
      <img alt="logo" id="logo" src="https://img.freepik.com/premium-vector/success-student-consulting_7109-29.jpg"/>
      <h1 id="head">Create Student Account</h1></div>
      <p>Get started for free!</p>
      </div>
    <form>
      <div className="input">
        <i className="fa-solid fa-user"></i>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />
      </div>
      <div className="input">
        <i className="fa-solid fa-user"></i>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
      </div>
      <div className="input">
        <i className="fa-solid fa-lock"></i>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
        </div>
      <div className="input">
        <i className="fa-solid fa-lock"></i>
        <input type={showPassword ? 'text' : 'password'} value={Conpassword} onChange={(e)=>setconPassword(e.target.value)} placeholder="Confirm Password" />
        <span className="password-toggle" onClick={togglePasswordVisibility}>
          {showPassword ? (
            <FontAwesomeIcon icon={faEyeSlash} />
          ) : (
            <FontAwesomeIcon icon={faEye} />
          )}
        </span>
        </div>
      <div class="checkbox">
          <input onClick={check} type="checkbox" id="remember"/>
          <label for="remember" id="terms"> I agree to the Terms and Conditions</label>
        </div>
     <input className="signup-btn" onClick={validate} type="submit" value="SIGN UP" /> 
    </form>
    <Link to="/login" className='link'>  <p>Already have an account? Sign in</p></Link>
  </div>
</div>
</div>
  )
}

export default StudentRegister;