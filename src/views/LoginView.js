import React from 'react';
import Login from '../components/Login/Login';
import { connect } from 'react-redux'


import { 
    registerUser, 
    handleRegisterChanges,
    handleLoginChanges,
    loginUser,
    logout
} from '../actions'

class LoginView extends React.Component {
    componentDidMount() {
        this.props.logout();
    }

    handleRegisterChanges = e => {
        this.props.handleRegisterChanges(e)
    }

    handleLoginChanges = e => {
        this.props.handleLoginChanges(e)
    }

    handleRegister = (e, newUser) => {
        e.preventDefault();
        if (newUser.password === newUser.pw2) {
            let regUser = {
                ...newUser, 
                age: parseInt(newUser.age)
            };
            delete regUser.pw2;
            console.log(regUser);
            this.props.registerUser(regUser)
        } else {
            alert('Passwords do not match!')
        }
    }

    handleLogin = (e, username, password) => {
        e.preventDefault();
        this.props.loginUser(username, password);
    }

    render() {
        return ( 
            <Login 
                history={this.props.history} 
                isRegistering={this.props.isRegistering}
                isLoggingIn={this.props.isLoggingIn}
                handleRegister={this.handleRegister}
                handleLogin={this.handleLogin}
                handleRegisterChanges={this.handleRegisterChanges}
                handleLoginChanges={this.handleLoginChanges}
                newUser={this.props.newUser}
                user={this.props.user} 
                isLoggedIn={this.isLoggedIn} 
            />
        );
    } 
};

const mapStateToProps = state => ({
    isRegistering: state.isRegistering,
    isLoggingIn: state.isLoggingIn,
    newUser: state.newUser,
    user: state.user,
    isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps, { registerUser, handleRegisterChanges, handleLoginChanges, loginUser, logout })(LoginView);