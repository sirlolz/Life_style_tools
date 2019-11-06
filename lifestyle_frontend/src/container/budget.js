import React from 'react'
import BudgetCard from '../components/budgetCard'
import CreateBudget from '../components/createBudget'
import { Redirect } from 'react-router-dom'

export default class Budget extends React.Component {
    state = {
        edit: false
    }

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
        }).then(r => r.json()).then(resp => this.props.addBudget(resp))
    }

    deleteBudget = () => {
        let id = this.props.currentUser.budgets[0].id
        fetch(`http://localhost:3000/budgets/${id}`, {
            method: 'DELETE',
            headers: {
                'content-Type':'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.token}`
            }
        }).then(response => {
            if(response.status === 204){
                this.props.removeBudget()
            }
        })
    }

    // handleEdit = () => {
    //     this.setState(prev => ({})
    // }

    render() {
        if (this.props.loggedIn === false){
            return <Redirect to="/login" />
        }
            return (
            <div>
                {this.props.currentUser.budgets.length > 0 ? <BudgetCard budget={this.props.budgets[0]} delete={this.deleteBudget}/>:<CreateBudget handleCreate={this.CreateBudget} />}
                {/* {this.state.edit ? <EditBudget />:null} */}
            </div>
            )
    }
}