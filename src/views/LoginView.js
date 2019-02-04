import React from 'react';
import Login from '../components/Login/Login';
import { connect } from 'react-redux'

import { registerUser, handleRegisterChanges } from '../actions'

class LoginView extends React.Component {
    handleRegisterChanges = e => {
        this.props.handleRegisterChanges(e)
    }

    handleRegister = (e, name, username, pw1, pw2) => {
        e.preventDefault();
        if (pw1 === pw2) {
            this.props.registerUser(name, username, pw1)
        } else {
            alert('Passwords do not match!')
        }
    }

    render() {
        return (
            <Login 
                history={this.props.history} 
                isRegistering={this.props.isRegistering}
                handleRegister={this.handleRegister}
                handleRegisterChanges={this.handleRegisterChanges}
                newUser={this.props.newUser}    
            />
        );
    } 
};

const mapStateToProps = state => ({
    isRegistering: state.isRegistering,
    newUser: state.newUser
})

export default connect(mapStateToProps, { registerUser, handleRegisterChanges })(LoginView);