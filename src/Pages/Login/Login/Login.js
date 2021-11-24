import React, { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="Login-form">
                            <h2 className="brand-color fw-bold text-center mt-5 mb-3">Login</h2>
                            <form onSubmit={handleLoginSubmit}> 

                            <input 
                            className="form-control mb-3" 
                            type="email" 
                            name="email"
                            onChange={handleOnChange}
                            placeholder="Email" />

                            <input 
                            className="form-control mb-3" 
                            type="password" 
                            name="password"
                            onChange={handleOnChange} 
                            placeholder="Password" />
                            <Button className="btn btn-primary fw-bold" type="submit">Login</Button>

                            </form>
                            {isLoading && <Spinner animation="border" variant="primary" />}
                            {user.email && <div class="alert alert-success mt-3" role="alert">
                                                    Login done successfully!
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

                            <p className="mt-4">New to Comfort Car Palace then please <Link to="/register">Create an account</Link> or go to <Link style={{fontSize:"22px",textDecoration:"none"}} to="/home">Home</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;