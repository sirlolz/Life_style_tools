import React from 'react'
import {Link, Redirect} from 'react-router-dom'

export default class Nav extends React.Component {



    render() {
        if (this.props.loggedIn === false){
            return <Redirect to="/login" />
        }

        return (
            <div>
        <Link to='/budget'>budget</Link> <Link to='/'>home</Link> <Link to='/workout'>workout</Link>
        </div>)
        
    }

}