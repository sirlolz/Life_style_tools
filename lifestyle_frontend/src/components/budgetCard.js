import React from 'react'

export default class BudgetCard extends React.Component {
    render(){
        return <div>
            income: {this.props.budget.income} <br/>
            expense: {this.props.budget.expenses} <br/>
            savings: {this.props.budget.savings} <br/>
            investments: {this.props.budget.investment} <br/>
            <button onClick={this.props.delete}>delete budget</button>
        </div>
    }
}