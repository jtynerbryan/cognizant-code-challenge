import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Form from './components/Form';
import Loader from './components/Loader';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Form}/>
          <Route exact path='/loader' component={Loader}/>
        </div>
      </Router>
    );
  }
}

export default App;
