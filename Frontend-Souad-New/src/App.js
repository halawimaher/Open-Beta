import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import AllProjects from './components/pages/AllProjects'
import ScrollArrow from './components/ScrollArrow'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch />
        <Route exact path="/" component={Home} />
        <Route path="/project"><AllProjects /></Route>
        <ScrollArrow />
      </Router>
    </>
  );
}

export default App;
