import React from 'react'

export default class CreateBudget extends React.Component {
    state={
        income: 0,
        expense: 0,
        saving: 0.5,
        invest: 0.5
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
        this.props.toggle();
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
                <select value={this.state.saving} onChange={this.handleSaving}>
                    <option value={0.5}>5%</option>
                    <option value={0.10}>10%</option>
                    <option value={0.15}>15%</option>
                </select>
            </label>
            <br/>
            <label>
                invest:
                <select value={this.state.invest} onChange={this.handleInvest}>
                    <option value={0.5}>5%</option>
                    <option value={0.10}>10%</option>
                    <option value={0.15}>15%</option>
                </select>
            </label>
            <br/>
            <input type="submit" value="create budget" />
        </form>
    }
}