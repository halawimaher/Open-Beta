import Login from "./Login.js";
import './App.css';
import Nav from '../src/components/Nav';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Experience from './pages/experiences/Experience';
import Skills from './pages/skills/Skills';
import Contact from './pages/contact/Contact';

class App extends Component {

  constructor() {
    super()
    this.state = {
      redirect: null
    }
    this.redirectFunc = this.redirectFunc.bind(this)
  }

  async componentDidMount() {

    const response = await fetch(`http://localhost:8000/user/login`, {
      headers: {
        'authorization': localStorage.getItem('login')
      }
    })
    const data = await response.json()
    if (data.msg === 'Token invalid') {
      this.setState({
        redirect: '/user/login'
      })
    }
  }

  redirectFunc() {
    if (this.state.redirect) {
      return < Redirect to={this.state.redirect} />
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          {this.redirectFunc()}
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
    )
  }
}

export default App;
