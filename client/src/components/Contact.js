import React, { useState } from "react";
import { validateEmail } from "../utils/hlpers";

//function to alert user when they enter an invalid email

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {

    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      setSuccessMessage("");
    } else {
      setSuccessMessage("Thank you!");
      setErrorMessage("");
    }
  };

  const [isButtonHovered, setIsButtonHovered] = useState(false);


  //style

  const styles = {
    formContainer: {
      padding: "35px",
      width: "50%",
      height: "100vh",
    },
     para: {
      fontSize: "30px",
    }, 
    input: {
      marginBottom: "1rem",
      padding: "0.375rem 0.75rem",
      fontSize: "1rem",
      lineHeight: "1.5",
      color: "#495057",
      backgroundColor: "#fff",
      border: "1px solid #ced4da",
      borderRadius: "0.25rem",
      width: "95%",
    },
    label: {
    fontFamily: "Roboto Mono",
      marginBottom: "0.5rem",
      fontSize: "1rem",
      fontWeight: "bold",
    },
    button: {
     fontFamily: "Roboto Mono",
      display: "block",
      width: "100%",
      padding: "0.5rem",
      fontSize: "1rem",
      fontWeight: "bold",
      color: "#fff",
      backgroundColor: "#112D3A",
      border: "none",
      borderRadius: "0.25rem",
      cursor: "pointer",
    },
    buttonHover: {
        backgroundColor: "#8AAD69",
      },
    errorText: {
      color: "red",
    },
    successText: {
      color: "green",
    },
  };

  //html markup

  return (
    <div style={styles.formContainer}>
      <p style={styles.para}>
        Please fill out this form and we'll get back to you as soon as
        possible
      </p>
      <form className="form" style={styles.formStyle}>
        <div>
            <label style={styles.label} htmlFor="email">Email address</label>
          <input
          style={styles.input}
            type="email"
            id="email"
            placeholder="name@example.com"
            value={email}
            name="email"
            onChange={handleInputChange}
            /*  type="email"
          placeholder="email" */
          />
        </div>

        <div>
            <label style={styles.label} htmlFor="name"> Your Name </label>
          <input
            style={styles.input}
            type="text"
            id="name"
            placeholder="Your Name"
            value={name}
            name="name"
            onChange={handleInputChange}
          />
         
        </div>

        <div>
            <label style={styles.label}> Your Message
            </label>
          <input
            style={styles.input}
            id="message"
            placeholder="Your Message"
            value={message}
            name="message"
            onChange={handleInputChange}
          />
        </div>

        <button
  type="button"
  style={{
    ...styles.button,
    ...(isButtonHovered && styles.buttonHover),
  }}
  onClick={handleFormSubmit}
  onMouseEnter={() => setIsButtonHovered(true)}
  onMouseLeave={() => setIsButtonHovered(false)}
>
          Submit
        </button>

          
        {errorMessage && <p className="error-text">{errorMessage}</p>}
          {successMessage && <p className="success-text">{successMessage}</p>}
      </form>
      
    </div>
  );
}

export default Contact;