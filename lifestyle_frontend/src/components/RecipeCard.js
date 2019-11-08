import React from 'react'

export default class RecipeCard extends React.Component{

    ingredients(){
        return this.props.recipe.ingredientLines.map((ing, key)=>{return <li key={key}>{ing}</li>})
    }
    render(){
        let styles= { 
            color:"orange"
        }
        return <div style={styles}>

            {/* <script src="https://developer.edamam.com/attribution/badge.js"></script> */}
                {this.props.recipe.label}
                <img alt="recipe img"src={this.props.recipe.image}></img>
            <ul>
                {this.ingredients()}
            </ul>
            <a href={this.props.recipe.url} >full recipe</a><br/>
            <button onClick={this.props.reset}>search again</button>
            <a href="https://www.edamam.com" ><img id="edamam-badge" alt="api attribution"src="https://developer.edamam.com/images/transparent.png"></img></a>
        </div>
    }
}