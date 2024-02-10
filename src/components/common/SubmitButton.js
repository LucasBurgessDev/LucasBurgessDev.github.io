/* function sendtodb(event, num) {
  var email = document.getElementById("email-input").value;
  email.value="New Value";
  console.log("email submitted");
} */

import './SubmitButton.css'
import React, { useState } from "react";


const YourComponent = () => {
  const [showContactBox, setShowContactBox] = useState(false); // State variable to track whether the contact box should be displayed

  const handleButtonClick = () => {
    setShowContactBox(!showContactBox); // Toggle the state variable
  };

  return (
    <div className="contact-button-container">
      <button onClick={handleButtonClick} className="contact-button">
        Contact Me
      </button>
      {showContactBox && <ContactBox />}{" "}
      {/* Render the ContactBox component only if showContactBox is true */}
    </div>
  );
};

const ContactBox = () => {
  // Function to smoothly scroll to the contact box
  const scrollToContactBox = () => {
    const contactBoxElement = document.getElementById("contact-box");
    contactBoxElement.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Component for the contact box
  return (
    <div id="contact-box" className="contact-box" onLoad={scrollToContactBox}>
      <h2>Contact Me</h2>
      <form>
        <div className="form-group">
          <input
            type="text"
            placeholder="First Name"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Last Name" className="form-control" />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Email" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default YourComponent;