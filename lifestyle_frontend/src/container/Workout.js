import React from 'react'
import WorkoutSelect from '../components/WorkoutSelect'

export default class Workout extends React.Component {
    state = {
        plan: "strength"
    }
    componentDidMount = () => {
        fetch("http://localhost:3000/exercises",{
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'accept':'application/json',
                'Authorization': `Bearer ${localStorage.token}`
            },
        }).then(r => r.json()).then(d => {
            console.log(d)
            this.setState({strength: [d[0], d[1]], cardio: [d[2] , d[3]]})
        })
    }

    handleSubmit = (event) => {
        this.setState({plan: event.target.value})
            
    }

    render(){
        return (
            <>
            <select onChange={this.handleSubmit} value={this.state.plan}>
                <option value="strength">strength</option>
                <option value="cardio">cardio</option>
            </select>
             {this.state.strength ? <WorkoutSelect plan={this.state.plan} strength={this.state.strength} cardio={this.state.cardio}/>: null}
            </>
        )
    }
}