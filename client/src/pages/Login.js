import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Login.css';
import { useMutation } from "@apollo/client";
import { LOGIN_USER, ADD_USER } from "../utils/mutations";
import AuthService from '../utils/auth';

function Login(props) {
    const [activeForm, setActiveForm] = useState('login');
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const handleSwitchForm = (form) => {
        setActiveForm(form);
    };

    //for signup
    const [addUser] = useMutation(ADD_USER);

    const handleSignUpSubmit = async (event) => {
        event.preventDefault();
        console.log(event, userFormData);
        const mutationResponse = await addUser({
            variables: {
                email: userFormData.email,
                password: userFormData.password,
                firstName: userFormData.firstName,
                lastName: userFormData.lastName,
                username: userFormData.username,
            },
        });
        console.log(mutationResponse);
        const token = mutationResponse.data.addUser.token;
    
        AuthService.login(token);
    };

    const handleSignUpChange = (event) => {
        const { name, value } = event.target;
        console.log({name,value});
        setUserFormData({
            ...userFormData,
            [name]: value,
        });

    };

    // code for login
    const [loginUser, ] = useMutation(LOGIN_USER);
    // const [validated] = useState(false);
    // const [showAlert, setShowAlert] = useState(false);

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        console.log(event, userFormData);
        try {
            
          const mutationResponse = await loginUser({
            variables: {
              username: userFormData.username,
              password: userFormData.password,
            },
          });
          console.log(mutationResponse);
          const token = mutationResponse.data.login.token;
          AuthService.login(token);
        } catch (e) {
          console.log(e);
        //   setShowAlert(true);
        }
      };
      const handleLoginChange = (event) => {
        const { name, value } = event.target;
        console.log({name,value});
        setUserFormData({
          ...userFormData,
          [name]: value,
        });
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
                        <form className="form form-login" onSubmit={handleLoginSubmit}>
                            <fieldset>
                                <legend>Please, enter your username and password for login.</legend>
                                <div className="input-block">
                                    <label htmlFor="login-username">Username</label>
                                    <input id="login-username" type="username" placeholder='Your username' name="username" required onChange={handleLoginChange} />
                                </div>
                                <div className="input-block">
                                    <label htmlFor="login-password">Password</label>
                                    <input id="login-password" type="password" placeholder='Your password' name="password" onChange={handleLoginChange} required />
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
                        <form className="form form-signup" onSubmit={handleSignUpSubmit}>
                            <fieldset>
                                <legend>Please, enter your email, password, and password confirmation for sign up.</legend>
                                <div className="input-block">
                                    <label htmlFor="signup-firstname">First Name</label>
                                    <input id="signup-firstname" type="text" name="firstName" 
                                        placeholder="Your First Name" onChange={handleSignUpChange} required />
                                </div>
                                <div className="input-block">
                                    <label htmlFor="signup-lastname">Last Name</label>
                                    <input id="signup-lastname" type="text" name="lastName" placeholder="Last Name" onChange={handleSignUpChange} required />
                                </div>
                                <div className="input-block">
                                    <label htmlFor="signup-username">Username</label>
                                    <input id="signup-username" type="text" name="username" placeholder="username" onChange={handleSignUpChange} required />
                                </div>
                                <div className="input-block">
                                    <label htmlFor="signup-email">E-mail</label>
                                    <input id="signup-email" type="email" name="email" placeholder="Your Email" onChange={handleSignUpChange} required />
                                </div>
                                <div className="input-block">
                                    <label htmlFor="signup-password">Password</label>
                                    <input id="signup-password" type="password" name="password" placeholder="Your Password" onChange={handleSignUpChange} required />
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
