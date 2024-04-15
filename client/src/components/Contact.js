import React, { useState } from "react";
import { validateEmail } from "../utils/hlpers";

import '../Styles/Contact.css'

//function to alert user when they enter an invalid email

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
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
        width: "100%",
        display: "flex",
        flexDirection: "column", 
        justifyContent: "center",
        alignItems: "center",
    },
    formStyle: {
        width: "45%",
        background: "hsl(0, 0%, 90%)",
        padding: "35px",
        borderRadius: "5px"
    },
     para: {
      fontSize: "30px",
      padding: "20px 40px", 
    }, 
    input: {
      fontSize: "1rem",
      lineHeight: "1.5",
      color: "#495057",
      backgroundColor: "#fff",
      border: "1px solid #ced4da",
      borderRadius: "0.25rem",
      width: "95%",
    },
    inputMessage: {
      marginBottom: "1rem",
      padding: "0.375rem 0.75rem",
      fontSize: "1rem",
      lineHeight: "1.5",
      color: "#495057",
      backgroundColor: "#fff",
      border: "1px solid #ced4da",
      borderRadius: "0.25rem",
      width: "95%",
      height: "100px",
     
    },
    label: {
    fontFamily: "Roboto Mono",
      marginBottom: "0.5rem",
      fontSize: "1rem",
      fontWeight: "bold",
    },
    btnWrap: {
        width: "100%", 
        display: "flex", 
        justifyContent: "center",
    }, 
    button: {
     fontFamily: "Roboto Mono",
      display: "block",
      width: "50%",
      padding: "0.5rem",
      fontSize: "1rem",
      fontWeight: "bold",
      color: "#fff",
      backgroundColor: "rgb(0, 120, 92)",
      border: "none",
      borderRadius: "0.25rem",
      cursor: "pointer",
    },
    buttonHover: {
      backgroundColor: "#123524",
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
    <div className="contact-page-wrap">
         <h4 style={styles.para}>
       reach out...
      </h4>
      <p>If you're interested in selling your work on Artly.com or if you just want to learn more contact us below</p>
     
    <div style={styles.formContainer}>

      <form className="contact-form" style={styles.formStyle}>
        <div>
            <label style={styles.label} htmlFor="email">Email address</label>
          <input
          style={styles.input}
            type="email"
            id="email"
            placeholder="email@example.com"
            value={email}
            name="email"
            onChange={handleInputChange}
          />
        </div>

        <div>
            <label style={styles.label} htmlFor="name"> Your Name </label>
          <input
            style={styles.input}
            type="text"
            id="name"
            value={name}
            name="name"
            onChange={handleInputChange}
          />
         
        </div>

        <div>
            <label style={styles.label}> Your Message
            </label>
          <input
            style={styles.inputMessage}
            type="text"
            id="message"
            name="message"
            onChange={handleInputChange}
          />
        </div>
<div className="button-wrap" style={styles.btnWrap}>
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
</div>
          
        {errorMessage && <p className="error-text">{errorMessage}</p>}
          {successMessage && <p className="success-text">{successMessage}</p>}
      </form>
      </div>
      </div>
   
  );
}

export default Contact;