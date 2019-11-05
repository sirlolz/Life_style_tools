import React from 'react'
export default class Login extends React.Component {

    HandleSubmit = (e) => {
        e.preventDefault()
        this.props.onLogin(this.props.username, this.props.password)
        this.props.onredirect()
    }
    
    render() {
        return (
            <form onSubmit={this.HandleSubmit}>
                <label>login</label><br/>
                <label>
                    name: 
                    <input type="text" value={this.props.username} onChange={this.props.HandleChangeUserName}/>
                </label><br/>
                <label>
                    password: 
                    <input type="password" value={this.props.password} onChange={this.props.HandleChangePassword}/>
                </label>
                <input type="submit" value="Login" />
            </form>
        )
    }
}