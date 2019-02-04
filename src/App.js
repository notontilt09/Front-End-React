import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginView from './views/LoginView'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/login' component={LoginView} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
})


export default connect(mapStateToProps, {})(App);
