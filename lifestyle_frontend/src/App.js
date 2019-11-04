import React from 'react';
import LoginCreate from "./container/LoginCreate"
import Nav from "./container/Nav"
import Budget from "./container/budget"
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';


export default class App extends React.Component {

  state = {
    key: "",
    currentUser: {},
    loggedIn: false
  }

  onCreateUser = (username, password) => {
      fetch("http://localhost:3000/users",
      {
        method: "POST",
        headers: {
            'content-Type':'application/json',
            'Accept':'application/json'
          }, 
        body: JSON.stringify({ "user":{"username": username, "password":password} })
      }
    ).then(resp => resp.json()).then(data => this.setState({currentUser: {...data}}))
  }

  onLogin = (username, password) => {
    fetch("http://localhost:3000/login",
      {
        method: "POST",
        headers: {
            'content-Type':'application/json',
            'Accept':'application/json'
          }, 
        body: JSON.stringify({ "user":{"username": username, "password":password} })
      }
    ).then(r => r.json()).then(d => {
        console.log(d.user)
        localStorage.setItem('token', d.jwt)
        this.setState({currentUser: {...d.user}})
    })
  }

  render (){
    return (
      <div className="App">
        <Router>
          {localStorage.token ?<Redirect to='/'/>:<Redirect to="/login"/>}
          <Route exact path="/login" render={() => <LoginCreate onLogin={this.onLogin} onCreateUser={this.onCreateUser} />}/>
          <Route exact path="/" render={() => < Nav currentUser={this.state.currentUser} />}/>
          <Route exact path='/budget' render={() => <Budget budgets={this.state.currentUser.budgets} currentUser={this.state.currentUser}/> }/>
        </Router>
      </div>
    );
  }
}