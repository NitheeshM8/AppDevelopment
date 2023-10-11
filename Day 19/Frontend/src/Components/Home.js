import React, { useState } from 'react'
import "./Home.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
const images = [
  'https://s2.research.com/wp-content/uploads/2020/06/24112554/studentloan-1-1200x600.jpeg', 'https://img.freepik.com/free-photo/brainstorm-meeting_1098-15871.jpg?w=740&t=st=1695584531~exp=1695585131~hmac=aef1bedb8c1b243c5e46de369feea2613805409ea6b3a27a35aa16e6704ae260', 'https://img.freepik.com/free-photo/multi-ethnic-group-young-men-women-studying-indoors_1139-989.jpg?w=740&t=st=1695584664~exp=1695585264~hmac=e9383a82a1470a3ab0a69dfdc1e9ce67f833c417ca0c9d47c7b45d89ab6b9c0e'
];
const textContent = [
  {
    title: 'Welcome to LearnNeo',
    description: 'Streamline Your Educational Journey with Us',
  },
  {
    title: 'A Gateway to Excellence in Education',
    description: 'Experience Excellence in Learning Our Courses',
  },
  {
    title: 'Empowering Minds, Igniting Futures',
    description: 'Empower Yourself with Quality Education',
  },
];
function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const goToPreviousImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    const goToNextImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
    const currentTextContent = textContent[currentImageIndex];
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div class="home">
    <div
    className="background"
    style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
  >
  <div className="content">
  <h1 className="animated-text">{currentTextContent.title}</h1>
  </div>
  <div className="content1">
  <h2 className='quot'>{currentTextContent.description}</h2>
  </div>
  <button class="btn2"><Link to="/"  style={{textDecoration:'none'}}>View Courses</Link></button>
  <button class="btn1"><Link to="/login" style={{textDecoration:'none'}}>Get Started Now</Link></button>
    <div className="arrowsl">
      <button className="left-arrow" onClick={goToPreviousImage}>

      <NavigateBeforeIcon/>
      </button>
      </div>
      <div className="arrowsr">
      <button className="right-arrow" onClick={goToNextImage}>
      <NavigateNextIcon/>
      </button>
    </div>
    </div>

<div class="footer">
<div class="inner-footer">

  <div class="footer-items">
    <h1>LearnNeo </h1>
    <p>Your Journey to Education</p>
  </div>

  <div class="footer-items">
    <h2>Quick Links</h2>
    <div class="border1"></div> 
      <ul className='left'>
        <a href="#"><li>Home</li></a>
       <li class="cont" onClick={togglePopup}>Contact  </li>
        {isOpen && <ContactForm
          content={<>
            <b className='cp'>CONTACT FORM</b>
            <br/>
            <input  className="weare" type="text1" placeholder="Email"/>
            <br/>
            <input  className="weare" type="text1" placeholder="Name"/>
            <br/>
            <input  className="weare" type="text1" id="message" placeholder="Enter Your Message"/>
            <br/>
            <input class="submit-btn" type="button" placeholder='Submit' value="Submit"/>
          </>}
          handleClose={togglePopup} />}
        
        <a href="#"><Link to="/about"><li>About</li></Link></a>
        <a href="#"><Link to="faq"><li>FAQ</li></Link></a>
      </ul>
  </div>

  <div class="footer-items">
    <h2>Social Media Links</h2>
    <div class="border1"></div>  
      <ul className='left'>
      <a href="https://www.instagram.com" target="_blank"><InstagramIcon/>  Instagram</a>
      <br/>
      <a href="https://www.facebook.com" target="_blank"><FacebookIcon/> Facebook</a>
      <br/>
      <a href="https://www.youtube.com" target="_blank"><YouTubeIcon/> Youtube</a>
      <br/>
      <a target="_blank" href="https://www.google.com/search?q=Learnneo+student+portal&sca_esv=567825245&ei=aCIRZZ36AcKOseMPsM2o0AM&ved=0ahUKEwidzv-Zi8WBAxVCR2wGHbAmCjoQ4dUDCBA&uact=5&oq=Learnneo+student+portal&gs_lp=Egxnd3Mtd2l6LXNlcnAiF0xlYXJubmVvIHN0dWRlbnQgcG9ydGFsMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB5IqmNQ9iZY4WBwAngBkAEBmAHrEKABmD2qAQszLTEuNy0xLjEuMrgBA8gBAPgBAcICChAAGEcY1gQYsAPCAgUQABiiBOIDBBgAIEGIBgGQBgg&sclient=gws-wiz-serp"><GoogleIcon/> Google</a>
    
      </ul>
  </div>
  <div class="footer-items">
    <h2>Get in Touch</h2>
    <div class="border1"></div>
      <ul className='left'>
        <li><LocationOnIcon/> Gandhipuram,Coimbatore</li>
        <li><a href="tel:0422222666"><PhoneIcon/> +91867709443</a></li>
        <li><a href="mailto:feedback@miniature.com"><AlternateEmailIcon/> feedback@LearNeo.com</a></li>
      </ul> 

      
  </div>
</div>

<div class="footer-bottom">
  Copyright &copy;  LearnNeo and Companies 2023.<u class="u1"><Link to="/terms" className='terms-link'>Terms and Conditons</Link> </u><u class="u2"><Link to="/privacy" className='terms-link'>Privacy Policy</Link></u>
</div>
</div>
    </div>
  )
}

export default Home