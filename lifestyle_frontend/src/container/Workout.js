import React from 'react'

export default class Workout extends React.Component {

    componentDidMount = () => {
        fetch("http://localhost:3000/workouts",{
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'accept':'application/json',
                'Authorization': `Bearer ${localStorage.token}`
            },
        }).then(r => r.json()).then(console.log)
    }

    render(){
        return <div>hôla</div>
    }
}