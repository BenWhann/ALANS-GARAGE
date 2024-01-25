import React from 'react';
import './CSS/LoginSignup.css'

const LoginSignup = () => {
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder='Username' />
                    <input type="email" placeholder='Email Address'/>
                    <input type="password" placeholder='Password' />
                </div>
                <button>Sign Up</button>
                <p className="loginsignup-login">Already have an account with us? <span>Login Here</span></p>
                <div className="loginsignup-agreement">
                    <input type="checkbox" name='' id='' />
                    <p>By choosing to continue, I agree to terms of use and privacy policy.</p>
                </div>
            </div>
        </div>
    )
};

export default LoginSignup;