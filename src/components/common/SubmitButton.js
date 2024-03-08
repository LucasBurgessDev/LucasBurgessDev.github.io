import "./SubmitButton.css";
import React, { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests

const YourComponent = () => {
  const [showContactBox, setShowContactBox] = useState(false);

  const handleButtonClick = () => {
    setShowContactBox(!showContactBox);

    // Send button click event to GA4
    window.gtag("event", "contact_button_click", {
      event_category: "Button Click",
      event_label: "Contact Me Button Clicked",
    });
  };

  return (
    <div className="contact-button-container">
      <button onClick={handleButtonClick} className="contact-button">
        Contact Me
      </button>
      {showContactBox && <ContactBox />}
    </div>
  );
};

const ContactBox = () => {
  const scrollToContactBox = () => {
    const contactBoxElement = document.getElementById("contact-box");
    contactBoxElement.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send form submission event to GA4
      window.gtag("event", "form_submission", {
        event_category: "Form Submission",
        event_label: "Contact Form Submitted",
      });

      // Additional form submission logic...

      // Send data to Cloud Function endpoint
      const response = await axios.post(
        "https://user-write-7hptrwqgna-nw.a.run.app",
        {
          firstName: event.target.elements.firstName.value,
          lastName: event.target.elements.lastName.value,
          email: event.target.elements.email.value,
        },
        {
          headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
/*             "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials":true,
            "Access-Control-Request-Method": "POST" */
          },
          crossDomain: true,
        }
      );

      console.log("Cloud Function response:", response.data);
    } catch (error) {
      // Handle errors
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Server error:", error.response.data);
        // Display the error message to the user
        alert(error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Network error:", error.request);
        // Display a generic error message to the user
        alert("Network error. Please try again later.");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Request error:", error.message);
        // Display a generic error message to the user
        alert("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div id="contact-box" className="contact-box" onLoad={scrollToContactBox}>
      <h2>Contact Me</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="First Name"
            className="form-control"
            name="firstName" // Add name attribute
            // Send input field focus event to GA4
            onFocus={() => {
              window.gtag("event", "input_focus", {
                event_category: "Input Focus",
                event_label: "First Name Input Focused",
              });
            }}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Last Name"
            className="form-control"
            name="lastName" // Add name attribute
            // Send input field focus event to GA4
            onFocus={() => {
              window.gtag("event", "input_focus", {
                event_category: "Input Focus",
                event_label: "Last Name Input Focused",
              });
            }}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Email"
            className="form-control"
            name="email" // Add name attribute
            // Send input field focus event to GA4
            onFocus={() => {
              window.gtag("event", "input_focus", {
                event_category: "Input Focus",
                event_label: "Email Input Focused",
              });
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default YourComponent;
