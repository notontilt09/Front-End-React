import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import LoginView from './views/LoginView';
import TripsView from './views/TripsView';
import Test from './views/Test';
import SingleTripView from './views/SingleTripView'
import { logout } from './actions'

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
        {localStorage.getItem('token') &&
          <Link to='/login'><button onClick={this.props.logout}>Logout</button></Link>
        }
        <Route exact path='/' component={Test} />
        <Route exact path='/login' component={LoginView} />
        <Route exact path='/trips' component={TripsView} />
        <Route path='/trips/:id' component={SingleTripView} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
})


export default withRouter(connect(mapStateToProps, { logout })(App));
