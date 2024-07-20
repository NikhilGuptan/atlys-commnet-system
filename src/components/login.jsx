import React from 'react'
import "./login.css"

function Login(){
    return(
        <div className='login-parent'>
            <div className='login-screen-div'>
                <p className='welcome-text'>WELCOME BACK</p>
                <p className='login-text'>Log Into your account</p>
                <div className='email-div'>
                    <p>Email or Username</p>
                    <input type="text" placeholder='Enter your Email or username' />
                </div>
                <div className='password-div'>
                    <div className='password-div-child'>
                        <p>Password</p>
                        <p>forgot Password ?</p>
                    </div>
                    <input type="text" placeholder='Enter your password' />
                </div>
                <button className='login-button'>Login Now</button>
                <p className='not-register-p'>Not registered yet? <span>Register</span></p>
            </div>
        </div>
    )
}

export default Login;
