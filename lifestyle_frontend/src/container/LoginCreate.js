import React from 'react'
import Login from "../components/Login"
import CreateUser from "../components/createUser"
import '../css/loginCreate.css'
import {Redirect} from 'react-router-dom'

export default class LoginCreate extends React.Component {
    state ={
        display: false,
        redirect: false,
        username: "",
        password: ""
    }

    HandleChangeUserName = (event) => {
        this.setState({username: event.target.value})
    }

    HandleChangePassword = (event) => {
        this.setState({password: event.target.value})
    }


    handleClick = (event) => {
        if (event.target.innerText === "createUser"){
            this.setState({display: true})
        }else{
            this.setState({display: false})
        }
    }

    setDisplay = () => {
        this.setState({display: false})
    }

    redirect = () =>{
        this.setState({redirect:true})
    }

    render() {
        if (this.state.redirect === true){
            return <Redirect to="/" />
        }
        return (
        <div className='login'>
            <div className="bar"><h1 onClick={this.handleClick}>Login</h1><h1 className="blinking" onClick={this.handleClick}>createUser</h1></div>
            <div className='form'>
            { this.state.display ?  (
                <CreateUser 
                    username={this.state.username} password={this.state.password} 
                    HandleChangePassword={this.HandleChangePassword} HandleChangeUserName={this.HandleChangeUserName}
                    onCreateUser={this.props.onCreateUser} setDisplay={this.setDisplay}
                /> 
                ) 
            : (
                <Login 
                    username={this.state.username} password={this.state.password}
                    HandleChangePassword={this.HandleChangePassword} HandleChangeUserName={this.HandleChangeUserName}
                    onLogin={this.props.onLogin} onredirect={this.redirect}
                />
             ) }
             </div>
        </div>
        )
    }
}