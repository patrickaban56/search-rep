import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Search from './components/Search';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
class App extends Component {
  

  render() {
    return (
      
      <BrowserRouter>
            <Navigation/>
            <Switch>
              <Route path='/' component={Home} exact/>
              <Route path='/search' component={Search}/>
            </Switch>
      </BrowserRouter>
       
       
    );
  }
}

export default App;
