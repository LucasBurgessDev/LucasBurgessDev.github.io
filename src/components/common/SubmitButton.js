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
        }
      );

      console.log("Cloud Function response:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
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
