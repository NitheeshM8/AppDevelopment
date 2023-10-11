import React from "react";
 
const ContactForm = props => {
  return (
    <div className="popup-box">
      <div className="boxv">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};
 
export default ContactForm;