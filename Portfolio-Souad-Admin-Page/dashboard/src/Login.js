import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: null,
            password: null,
            store: null
        }
    }
    login(e) {
        e.preventDefault()
        fetch('http://localhost:8000/user/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(response => response.json()).then(data => {
            if (data.token) {
                localStorage.setItem('login', data.token)
                this.props.history.push('/about')
            } else {
                console.log('wrong user')
            }
        })
    }


    render() {
        return (
            <div id="Log">
                <form id="loginForm">
                    <h2><span className="entypo-login"><i className="fa fa-sign-in"></i></span> Login</h2>
                    <button className="submit" onClick={(e) => { this.login(e) }}><span className="entypo-lock"><i className="fa fa-lock"></i></span></button>
                    <span className="entypo-user inputUserIcon">
                        <i className="fa fa-user"></i>
                    </span>
                    <input type="text" className="user" id="user" onChange={(event) => { this.setState({ username: event.target.value }) }} />
                    <span className="entypo-key inputPassIcon">
                        <i className="fa fa-key"></i>
                    </span>
                    <input type="password" name="pass" className="pass" id="password" onChange={(event) => { this.setState({ password: event.target.value }) }} />
                </form>
            </div>
        );
    }
}

export default Login;