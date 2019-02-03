import React from 'react';
import Login from '../components/Login/Login';

const LoginView = props => {
    return (
        <Login history={props.history} />
    );
};

export default LoginView;