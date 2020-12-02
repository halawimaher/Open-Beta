import Login from "./Login.js";
import './App.css';
import Nav from '../src/components/Nav';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Experience from './pages/experiences/Experience';
import Skills from './pages/skills/Skills';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path='/user/login' component={Login} />
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/experience' component={Experience} />
          <Route path='/skill' component={Skills} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
