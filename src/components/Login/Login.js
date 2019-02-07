import React from 'react'

import Loader from 'react-loader-spinner'
import logo from '../../images/logo.png'

import './login.css'

const Login = props => {
    return (
        <div className='login'>
            <div className='login-header'>
                <img src={logo} alt="main-logo"/>
                <h3>Welcome! Please login or register below.</h3>
            </div>
            <div className='login-forms'>
                <form onSubmit={(e) => props.handleLogin(e, props.user.username, props.user.password)} className='sign-in'>
                    <input 
                        onChange={props.handleLoginChanges}
                        value={props.user.username}
                        required 
                        type='text' 
                        name='username' 
                        placeholder="username" 
                    />
                    <input 
                        onChange={props.handleLoginChanges}
                        value={props.user.password}
                        required 
                        type='password' 
                        name='password' 
                        placeholder="password" 
                    />
                    <button type="submit">Login</button>
                    {props.isLoggingIn && 
                        <div className='login-spinner'>
                            <Loader className="login-spinner" color='purple' type="Puff" height={80} width={80} />
                        </div>
                    }
                </form>
                <form onSubmit={(e) => props.handleRegister(e, props.newUser)} className='register'>
                    <input 
                        onChange={props.handleRegisterChanges} 
                        value={props.newUser.name} 
                        required 
                        type='text' 
                        name='name' 
                        placeholder="Enter your name" 
                    />
                    <input 
                        onChange={props.handleRegisterChanges} 
                        value={props.newUser.username} 
                        required 
                        type='text' 
                        name='username' 
                        placeholder="Choose a username" 
                    />
                    <input 
                        onChange={props.handleRegisterChanges} 
                        value={props.newUser.pw1} 
                        required 
                        type='password'
                        name='password' 
                        placeholder="Pick a strong password" 
                    />
                    {props.newUser.password.length > 0 && props.newUser.password.length  < 8 &&
                        <h4 className='too-short'>Password Too Short</h4>
                    }
                    <input 
                        onChange={props.handleRegisterChanges} 
                        value={props.newUser.pw2} 
                        required 
                        type='password' 
                        name='pw2' 
                        placeholder="Confirm Password" 
                    />
                    {props.newUser.password !== props.newUser.pw2 &&
                        <h4 className='pw-mismatch'>Passwords do not match</h4>
                    }
                    <input 
                        onChange={props.handleRegisterChanges} 
                        value={props.newUser.age} 
                        required 
                        type='number' 
                        name='age' 
                        placeholder="Age" 
                    />
                    <input 
                        onChange={props.handleRegisterChanges} 
                        value={props.newUser.title} 
                        required 
                        type='text' 
                        name='title' 
                        placeholder="Job Title" 
                    />
                    <input 
                        onChange={props.handleRegisterChanges} 
                        value={props.newUser.careerLength} 
                        required 
                        type='number' 
                        name='careerLength' 
                        placeholder="Career Length" 
                    />
                    <textarea 
                        onChange={props.handleRegisterChanges} 
                        value={props.newUser.tagline} 
                        required 
                        name='tagline' 
                        placeholder="Short tagline describing yourself" 
                    />
                    
                    <button type='submit'>Create Account</button>
                    {props.isRegistering && 
                        <div className='login-spinner'>
                            <Loader className="login-spinner" color='purple' type="Puff" height={80} width={80} />
                        </div>
                    }
                </form>
          </div>
          
        </div>
    );
};

export default Login;