import React from 'react'
import RecipeCard from '../components/RecipeCard'
import RecipeForm from '../components/RecipeForm'

export default class Recipe extends React.Component {
    

    state={
        value:""
    }

    handleChange = (e) => {
        this.setState({value:e.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault() 
        let food = this.state.value
        fetch(`https://api.edamam.com/search?app_id=113f70b5&app_key=50f3b2cd9a026789b545b2e3fdd8f05f&q=${food}`)
        .then(r => r.json())
        .then(data => this.setState({recipe:{...data.hits[Math.floor(Math.random() * 5)].recipe}}))
    }

    reset = () => {
        this.setState({recipe:""})
    }
    

    render(){
        return <>
        {!!this.state.recipe ? 
        <RecipeCard recipe={this.state.recipe} background={this.props.background} reset={this.reset}/>
        :
        <RecipeForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={this.state.value}/>
        }
        </>
    }
}