import React, {Component} from 'react';
import './App.scss';

import Home from './components/scenes/Home/Home'

import {Route, Switch, Redirect} from 'react-router-dom'

const App = () => {
    return (
        <div className="App">
            <Switch>
                <Route path="/home" component={Home}/>
                <Redirect from="/" exact to="/home"/>
            </Switch>
        </div>
    );
}

export default App;
