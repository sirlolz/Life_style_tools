import React from 'react'

export default class User extends React.Component {
    render() {
        return <div>Welcome Home: {this.props.currentUser.username}</div>
    }
}