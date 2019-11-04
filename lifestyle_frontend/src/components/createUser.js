import React from 'react'
export default class CreateUser extends React.Component {

    HandleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreateUser(this.props.username, this.props.password);
        this.props.setDisplay()
    }
    render() {
        return(
            <form onSubmit={this.HandleSubmit}>
                <label>create User</label><br/>
                <label>
                    name: 
                    <input type="text" value={this.props.username} onChange={this.props.HandleChangeUserName}/>
                </label><br/>
                <label>
                    password: 
                    <input type="password" value={this.props.password} onChange={this.props.HandleChangePassword}/>
                </label>
                <input type="submit" value="Create User"/>
            </form>
    )
    }
}