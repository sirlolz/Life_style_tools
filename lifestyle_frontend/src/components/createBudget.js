import React from 'react'

export default class CreateBudget extends React.Component {
    state={
        income: 0,
        expense: 0,
        saving: 0,
        invest: 0
    }

    handleIncome = (e) => {
        this.setState({income: e.target.value})
    }

    handleExpense = (e) => {
        this.setState({expense: e.target.value})
    }

    handleSaving = (e) => {
        this.setState({saving: e.target.value})
    }

    handleInvest = (e) => {
        this.setState({invest: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleCreate(this.state.income, this.state.expense, this.state.saving, this.state.invest)
    }

    render () {
       return <form className='budgetForm' onSubmit={this.handleSubmit}>
            <label>
                income:
                <input type="integer" value={this.state.income} onChange={this.handleIncome}/>
            </label>
            <br/>
            <label>
                expense:
                <input type="integer" value={this.state.expense} onChange={this.handleExpense}/>
            </label>
            <br/>
            <label>
                save:
                <input type="float" value={this.state.saving} onChange={this.handleSaving}/>
            </label>
            <br/>
            <label>
                invest:
                <input type="float" value={this.state.invest} onChange={this.handleInvest}/>
            </label>
            <br/>
            <input type="submit" value="create budget" />
        </form>
    }
}