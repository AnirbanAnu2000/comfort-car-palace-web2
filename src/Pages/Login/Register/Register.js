import React, { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const Register = () => {

    const [loginData, setLoginData] = useState({});
    const { user, registerUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }; 
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <div>
            <div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="Login-form">
                                <h2 className="brand-color fw-bold text-center mt-5 mb-3">Register</h2>
                                {!isLoading && <form onSubmit={handleLoginSubmit}>

                                <input 
                                className="form-control mb-3" 
                                type="text" 
                                name="name"
                                onBlur={handleOnBlur}
                                placeholder="Your name" />

                                <input 
                                className="form-control mb-3" 
                                type="email" 
                                name="email"
                                onBlur={handleOnBlur}
                                placeholder="Email" />

                                <input 
                                className="form-control mb-3" 
                                type="password" 
                                name="password"
                                onBlur={handleOnBlur} 
                                placeholder="Password" />

                                <input 
                                className="form-control mb-3" 
                                type="password" 
                                name="password2"
                                onBlur={handleOnBlur} 
                                placeholder="Confirm Password" />

                                <Button className="btn btn-primary" type="submit">Register</Button>

                                </form>}

                                {isLoading && <Spinner animation="border" variant="primary" />}
                                {user.email && <div class="alert alert-success mt-3" role="alert">
                                                    Registration done successfully!
                                                 </div>}
                                {authError && <div class="alert alert-danger mt-3" role="alert">
                                                    {authError}
                                               </div>}

                                <div onClick={handleGoogleSignIn} style={{cursor:"pointer",display:"inline-block"}} className="text-center mt-4">
                                <span>
                                    <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/decent-healthcare/google.png" alt="Google Logo" width="60px" />
                                </span>
                                <p className="text-primary fw-bold">Google Sign In</p>
                                </div>

                                <p className="mt-4">Already have a account? please <Link to="/login">Login</Link> or go to <Link style={{fontSize:"22px",textDecoration:"none"}} to="/home">Home</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                              
        </div>
    );
};

export default Register;