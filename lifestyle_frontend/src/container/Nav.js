import React from 'react'
import {Link, Redirect} from 'react-router-dom'

export default class Nav extends React.Component {

    render() {
        if (!localStorage.token){
            console.log(!localStorage.token)
            return <Redirect to="/login" />
        }

        return (
            <div>
            <Link to='/budget'>budget</Link>{" "}
            <Link to='/'>home</Link>{" "}
            <Link to='/workout'>workout</Link>{" "}
            <Link to='/foodplease'>Recipe look-up</Link>
            <button onClick={this.props.logout}>logout</button>
        </div>)   
    }
}