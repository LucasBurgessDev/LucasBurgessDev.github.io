/* function sendtodb(event, num) {
  var email = document.getElementById("email-input").value;
  email.value="New Value";
  console.log("email submitted");
} */

import './SubmitButton.css'
import React, { useState } from "react";

const YourComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleButtonClick = async () => {
    try {
      // Your logic to call the Lambda function here
    } catch (error) {
      console.error("Error calling Lambda function:", error.message);
      // Handle error
    }
  };

  return (
    <div className="contact-form">
      <h2>Contact Me</h2>
      <form>
        <div className="form-group">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>
        <button
          type="submit"
          onClick={handleButtonClick}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default YourComponent;