import React, { useState } from 'react';
import '../Styles/Login.css';
import { Form, Button, Alert } from 'react-bootstrap';

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import AuthService from '../utils/auth';

function Login() {
  const [activeForm, setActiveForm] = useState('login');
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [loginUser, ] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleSwitchForm = (form) => {
    setActiveForm(form);
  };

    e.preventDefault();
    // Add your login or signup logic here
  };

  return (
    <div className="container">
      <section className="forms-section">
        <div className="forms">
          <div className={`form-wrapper ${activeForm === 'login' ? 'is-active' : ''}`}>
            <button type="button" className="switcher switcher-login" onClick={() => handleSwitchForm('login')}>
              Login
              <span className="underline"></span>
            </button>
            <form className="form form-login" onSubmit={handleSubmit}>
              <fieldset>
                <legend>Please, enter your email and password for login.</legend>
                <div className="input-block">
                  <label htmlFor="login-email">E-mail</label>
                  <input id="login-email" type="email" required />
                </div>
                <div className="input-block">
                  <label htmlFor="login-password">Password</label>
                  <input id="login-password" type="password" required />
                </div>
              </fieldset>
              <button type="submit" className="btn-login">
                Login
              </button>
            </form>
          </div>
          <div className={`form-wrapper ${activeForm === 'signup' ? 'is-active' : ''}`}>
            <button type="button" className="switcher switcher-signup" onClick={() => handleSwitchForm('signup')}>
              Sign Up
              <span className="underline"></span>
            </button>
            <form className="form form-signup" onSubmit={handleSubmit}>
              <fieldset>
                <legend>Please, enter your email, password, and password confirmation for sign up.</legend>
                <div className="input-block">
                <label htmlFor="signup-firstname">First Name</label>
                <input
                  id="signup-firstname"
                  type="text"
                  name="firstName"
                  value={formState.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-block">
                <label htmlFor="signup-lastname">Last Name</label>
                <input
                  id="signup-lastname"
                  type="text"
                  name="lastName"
                  value={formState.lastName}
                  onChange={handleChange}
                  required
                />
                </div>
                <div className="input-block">
                  <label htmlFor="signup-username">Username</label>
                  <input id="signup-username" type="text" required />
                </div>
                <div className="input-block">
                  <label htmlFor="signup-email">E-mail</label>
                  <input id="signup-email" type="email" required />
                </div>
                <div className="input-block">
                  <label htmlFor="signup-password">Password</label>
                  <input id="signup-password" type="password" required />
                </div>
              </fieldset>
              <button type="submit" className="btn-signup">
                Continue
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;