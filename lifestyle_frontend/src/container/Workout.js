import React from 'react'
import WorkoutSelect from '../components/WorkoutSelect'

export default class Workout extends React.Component {
    state = {
        plan: "strength"
    }
    componentDidMount = () => {
        fetch("http://localhost:3000/workouts",{
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'accept':'application/json',
                'Authorization': `Bearer ${localStorage.token}`
            },
        }).then(r => r.json()).then(d => {
            this.setState({strength: d[0]['exercises'], cardio: d[1]['exercises']})
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