import React from 'react'

export default class RecipeForm extends React.Component {


    render(){
        return <form onSubmit={this.props.handleSubmit} >
            <input type="text" value={this.props.value} onChange={this.props.handleChange}/>
            <input type="submit" value="enter 'A' food" />
        </form>
    }
}