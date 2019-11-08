import React from 'react'

export default class WorkoutSelect extends React.Component {
    
    datecheck(){
        if(new Date().getDate % 2 === 0 ){
            return 0
        }else {
            return 1
        }
    }
    render () {
        return <div>{this.props.plan === 'cardio'? <div>{this.props.cardio[this.datecheck()].name}</div> : <div>{this.props.strength[this.datecheck()].name}</div>}</div>
    }
}