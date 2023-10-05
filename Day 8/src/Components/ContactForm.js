<<<<<<< HEAD
import React from "react";
 
const ContactForm = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};
 
=======
import React from "react";
 
const ContactForm = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};
 
>>>>>>> a1900e588f2252b25795fec4df5f5a0ab51fc5d3
export default ContactForm;