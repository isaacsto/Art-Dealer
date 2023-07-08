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
    //   const handleSwitchForm = () => {
    //     setIsLogin(!isLogin);
    //     setValidated(false);
    //     setShowAlert(false);
    // };

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
    const [login, { error }] = useMutation(LOGIN_USER);

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        try {
          const mutationResponse = await login({
            variables: {
              username: userFormData.username,
              password: userFormData.password,
            },
          });
          const token = mutationResponse.data.login.token;
          AuthService.login(token);
        } catch (e) {
          console.log(e);
        }
      };
      const handleLoginChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({
          ...userFormData,
          [name]: value,
        });
      };
    

    // const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    // const [validated, setValidated] = useState(false);
    // const [showAlert, setShowAlert] = useState(false);
    // const [isLogin, setIsLogin] = useState(true);
    // const [loginUser,] = useMutation(LOGIN_USER);



    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setUserFormData({ ...userFormData, [name]: value });
    // };




    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    //         event.stopPropagation();
    //     }

    //     setValidated(true);

    //     try {
    //         let { data } = null;

    //         if (isLogin) {
    //             data = await loginUser({
    //                 variables: userFormData,
    //             });
    //         } else {
    //             data = await addUser({
    //                 variables: userFormData,
    //             });
    //         }

    //         AuthService.login(data.login.token);
    //     } catch (err) {
    //         console.error(err);
    //         setShowAlert(true);
    //     }

    //     setUserFormData({
    //         email: "",
    //         password: "",
    //     });
    //     // Add your login or signup logic here
    //     //code for signup
    //     const handleFormSubmit = async (event) => {
    //         event.preventDefault();
    //         const mutationResponse = await addUser({
    //             variables: {
    //                 email: userFormData.email,
    //                 password: userFormData.password,
    //                 firstName: userFormData.firstName,
    //                 lastName: userFormData.lastName,
    //                 username: userFormData.username,
    //             },
    //         });
    //         const token = mutationResponse.data.addUser.token;
    //         AuthService.login(token);
    //     };

    //     const handleChange = (event) => {
    //         const { name, value } = event.target;
    //         setUserFormData({
    //             ...userFormData,
    //             [name]: value,
    //         });
    //     };
    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();

    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    //       event.stopPropagation();
    //     } setValidated(true);

    //     try {
    //       let { data } = null;

    //       if (isLogin) {
    //         data = await loginUser({
    //           variables: userFormData,
    //         });
    //       } else {
    //         data = await addUser({
    //           variables: userFormData,
    //         });
    //       }

    //       AuthService.login(data.login.token);
    //     } catch (err) {
    //       console.error(err);
    //       setShowAlert(true);
    //     }

    //     setUserFormData({
    //       email: "",
    //       password: "",
        // };

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
                                <legend>Please, enter your email and password for login.</legend>
                                <div className="input-block">
                                    <label htmlFor="login-email">E-mail</label>
                                    <input id="login-email" type="email" placeholder='Your email' required onChange={handleLoginChange} />
                                </div>
                                <div className="input-block">
                                    <label htmlFor="login-password">Password</label>
                                    <input id="login-password" type="password" placeholder='Your password' onChange={handleLoginChange} required />
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
                                    <input id="signup-firstname" type="text" name="firstName" //   value={formState.firstName}
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