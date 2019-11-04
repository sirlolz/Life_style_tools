import React from 'react'
import BudgetCard from '../components/budgetCard'
import CreateBudget from '../components/createBudget'
export default class Budget extends React.Component {

    CreateBudget = (income, expenses, savings, investment) => {
        fetch("http://localhost:3000/budgets",
        {
          method: "POST",
          headers: {
              'content-Type':'application/json',
              'Accept':'application/json',
              'Authorization': `Bearer ${localStorage.token}`
            }, 
          body: JSON.stringify({ "budget":{"income": income, "expenses":expenses, 'savings': savings, 'investment':investment, 'user_id':this.props.currentUser.id} })
        }).then(r => r.json).then(console.log)
    }

    render() {
        console.log(this.props.currentUser)
            return (
            <div>
                {this.props.currentUser.budgets.length > 0 ? <BudgetCard budget={this.props.budgets[0]}/>:<CreateBudget handleCreate={this.CreateBudget} />}
            </div>
            )
    }
}