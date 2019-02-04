import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import LoginView from './views/LoginView'
import TripsView from './views/TripsView'

import './App.css';

class App extends Component {
  componentWillReceiveProps = newProps => {
    if(newProps.isLoggedIn !== this.props.isLoggedIn){
      this.props.history.push('/trips');
    }
  }

  render() {
    return (
      <div className="App">
        <Route path='/login' component={LoginView} />
        <Route path='/trips' component={TripsView} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
})


export default withRouter(connect(mapStateToProps, {})(App));
