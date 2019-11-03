import React from 'react'

export default class CreateUser extends React.Component {

    render() {
        return(
            <form onSubmit={this.HandleSubmit}>
                <label>
                    name: 
                    <input type="text" value={this.props.username} onChange={this.HandleChangeUserName}/>
                </label><br/>
                <label>
                    password: 
                    <input type="password" value={this.props.password} onChange={this.HandleChangePassword}/>
                </label>
            </form>
    )
    }
}