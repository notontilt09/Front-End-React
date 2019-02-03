import React from 'react'

import './login.css'

const Login = props => {
    return (
        <div className='login'>
          <h1>Guidr</h1>
          <h3>Welcome! Please login or register below.</h3>
          <div className='login-forms'>
            <form className='sign-in'>
                <input required type='text' name='username' placeholder="username" />
                <input required type='password' name='password' placeholder="password" />
                <button type="submit">Login</button>
            </form>
            <form className='register'>
                <input required type='text' name='name' placeholder="Enter your name" />
                <input required type='text' name='username' placeholder="Choose a username" />
                <input required type='password' name='password' placeholder="Pick a strong password" />
                <input required type='password' name='password-match' placeholder="Confirm Password" />
                <button type='submit'>Create Account</button>
            </form>
          </div>
          
        </div>
    );
};

export default Login;