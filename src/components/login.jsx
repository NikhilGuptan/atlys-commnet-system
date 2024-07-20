import React, { useState } from 'react';
import "./login.css";
import { FaArrowRight, FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {
    const [email, setEmail] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className='login-parent'>
            <div className='login-screen-div'>
                <p className='welcome-text'>WELCOME BACK</p>
                <p className='login-text'>Log Into your account</p>
                <div className='email-div'>
                    <p>Email or Username</p>
                    <input
                        type="text"
                        placeholder='Enter your Email or username'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='password-div'>
                    <div className='password-div-child'>
                        <p>Password</p>
                        <p>forgot Password ?</p>
                    </div>
                    <div className='password-input-wrapper'>
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            placeholder='Enter your password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className='eye-icon' onClick={togglePasswordVisibility}>
                            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                </div>
                <button className='login-button'>Login Now</button>
                <p className='not-register-p'>Not registered yet? <span>Register <FaArrowRight /></span></p>
            </div>
        </div>
    );
}

export default Login;
