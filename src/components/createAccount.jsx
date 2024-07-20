import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaEye, FaEyeSlash, FaTimes } from 'react-icons/fa';
import "./createAccount.css";

function CreateAccount({ onClose }) {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className='continue-create-account-modal'>
            <div className='continue-create-account-content'>
                <span className='continue-close-icon' onClick={onClose}><FaTimes /></span>
                <p className='continue-welcome-text'>SIGN UP</p>
                <p className='continue-login-text'>Create an account to continue</p>
                <div className='continue-email-div'>
                    <p>Email</p>
                    <input
                        type="text"
                        placeholder='Enter your Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='continue-username-div'>
                    <p>Username</p>
                    <input
                        type="text"
                        placeholder='Choose a preferred username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className='continue-password-div'>
                    <div className='continue-password-div-child'>
                        <p>Password</p>
                    </div>
                    <div className='continue-password-input-wrapper'>
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            placeholder='Enter your password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className='continue-eye-icon' onClick={togglePasswordVisibility}>
                            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                </div>
                <button className='continue-login-button' onClick={onClose}>Continue</button>
                <p className='continue-not-register-p'>Already have an account? <span>Login <FaArrowRight /></span></p>
            </div>
        </div>
    );
}

export default CreateAccount;
