import React from 'react';
import LoginCreate from "./container/LoginCreate"
import Nav from "./container/Nav"
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';


export default class App extends React.Component {

  state = {
    key: "",
    currentUser: {}
  }

  onLogin = (username, password) => {
    console.log(JSON.stringify({user:{username, password}}))
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
      console.log(d)
      this.setState({currentUser: {...d}})
    })
  }

  render (){
    return (
      <div className="App">
        <Router>
          {!!this.state.key ? <Redirect to='/nav'/>:<Redirect to='/login'/>}
          <Route exact path="/login" render={() => <LoginCreate onLogin={this.onLogin}/>}/>
          <Route exact path="/nav" render={() => < Nav currentUser={this.state.currentUser} />}/>
        </Router>
      </div>
    );
  }
}