import React from 'react';
import LoginCreate from "./container/LoginCreate"
import Nav from "./container/Nav"
import Budget from "./container/budget"
import User from "./container/User"
import Workout from './container/Workout'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';


export default class App extends React.Component {

  state = {
    key: "",
    currentUser: {},
    loggedIn: false
  }

  addBudget = (budget) => {
    this.setState( 
      prev => (
        {...prev, currentUser:{
          ...prev.currentUser, budgets: [{...budget}]
        }}
      )
    )
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
        this.setState({loggedIn: true, currentUser: {...d.user}})
        
    })
  }

  render (){
    console.log(this.state.loggedIn)
    return (
        <Router>
          <div >
            <Nav loggedIn={this.state.loggedIn}/>
          <Route exact path="/" render={() => < User currentUser={this.state.currentUser} />}/>
          <Route exact path="/login" render={() => <LoginCreate onLogin={this.onLogin} onCreateUser={this.onCreateUser} />}/>
          <Route exact path='/budget' render={() => <Budget addBudget={this.addBudget} loggedIn={this.state.loggedIn} budgets={this.state.currentUser.budgets} currentUser={this.state.currentUser}/> }/>
          <Route exact path='/workout' render={() => <Workout />} />
          </div>
        </Router>
    );
  }
}