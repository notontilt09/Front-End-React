import React, { Component } from 'react';
import { Route } from 'react-router-dom';

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

export default App;
