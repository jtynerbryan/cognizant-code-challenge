import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Form from './components/Form';
import Loader from './components/Loader';
import SortData from './components/SortData';
import Results from './components/Results';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Form}/>
          <Route exact path='/loader' component={Loader}/>
          <Route exact path='/sort-weather-data' component={SortData}/>
          <Route exact path='/results' component={Results}/>
        </div>
      </Router>
    );
  }
}

export default App;
