import React, { Component } from 'react';
import './App.css';

import Home from 'Scenes/Home/Home'

import { Route, Switch, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Switch >
            <Route path="/home" component={Home} />
            <Redirect from="/" exact to="/home"/>
      </Switch>
      </div>
    );
  }
}

export default App;
