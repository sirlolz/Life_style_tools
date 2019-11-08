import React from 'react'
import '../css/login.css'

export default class Login extends React.Component {

    HandleSubmit = (e) => {
        e.preventDefault()
        this.props.onLogin(this.props.username, this.props.password)
        this.props.onredirect()
    }
    
    render() {
        return (
            <form onSubmit={this.HandleSubmit}>
                <h1 className="loginHeader">login</h1><br/>
                <label className="name">
                    name: 
                </label>
                <input className="nameInput" type="text" value={this.props.username} onChange={this.props.HandleChangeUserName}/>
                <label className="password">
                    password: 
                </label>
                <input className="passwordInput" type="password" value={this.props.password} onChange={this.props.HandleChangePassword}/>
                <button className="subby" type="submit">Submit</button>
            </form>
        )
    }
}