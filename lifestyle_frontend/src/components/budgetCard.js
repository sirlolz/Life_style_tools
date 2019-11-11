import React from 'react'
import '../css/budgetCard.css'
import PieChart from 'react-minimal-pie-chart'
import CreateBudget from './createBudget'

export default class BudgetCard extends React.Component {
    state = {
        render: false
    }
    render(){
        let left = this.props.budget.income - this.props.budget.expenses - this.props.budget.savings - this.props.budget.investment
        return (
        <div className="budget">
            <PieChart
                data={[
                    { title: `expenses $${this.props.budget.expenses}`, value: this.props.budget.expenses, color: '#E38627' },
                    { title: `savings  $${this.props.budget.savings}`, value: this.props.budget.savings, color: '#C13C37' },
                    { title: `investments  $${this.props.budget.investment}`, value: this.props.budget.investment, color: '#6A2135' },
                    { title: `remaining $${left}`, value: left, color: "#ffffff" }
                ]}
            />
            <div className="raw-data">
                income: {this.props.budget.income} <br/>
                expense: {this.props.budget.expenses} <br/>
                savings: {this.props.budget.savings.toFixed(2)} <br/>
                investments: {this.props.budget.investment.toFixed(2)} <br/>
                <button onClick={this.props.delete}>delete budget</button>
                <button onClick={() => this.setState(prev => ({render:!prev.render}))}>open edit budget</button>
            </div>
            {this.state.render ? (<CreateBudget handleCreate={this.props.handleCreate}/>):(null)}
        </div>)
    }
}