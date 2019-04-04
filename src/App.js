import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import './index.css'
import './App.css';
import Home from './Home';
import Weather from './WeatherApp';
import StarWars from './StarWars';
import ToDoList from './ToDoList';
import About from './About';

import {Route,NavLink,HashRouter} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        {/* <h1>Multi page app on react.js</h1> */}
        <ul className="header">
        <li><NavLink to="/"></NavLink></li>
        <li><NavLink to="/weather">Weather app</NavLink></li>
        <li><NavLink to="/starwars">Star Wars app</NavLink></li>
        <li><NavLink to="/todolist">Todo List app</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        </ul>
        <div className="content">
        <Route exact path="/" component={Home}/>
        <Route path="/weather" component={Weather}/>
        <Route path="/StarWars" component={StarWars}/>
        <Route path="/ToDoList" component={ToDoList}/>
        <Route path="/About" component={About}/>
        </div>
      </div>
      </HashRouter>
    );
  }
}

export default App;
