import React, { Component } from 'react'
// 부모로 부터 데이터를 받아 보여주기만 하는 자식 컴포넌트
// 자체적으로 state를 가질 필요가 없다 

 class Habit extends Component {
     
     handleIncrement = () => {
       this.props.onIncrement(this.props.habit)
     }
     handleDecrement = () => {
        this.props.onDecrement(this.props.habit)
     }
    
    handleDelete = () => {
        this.props.onDelete(this.props.habit)
    }
    render() {
        const {name, count} = this.props.habit;

        return (
            <li className="habit">
            <span className="habit-name">{name}</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
            <button className="habit-button habit-decrease"  onClick={this.handleDecrement}>
                <i className="fas fa-minus-square"></i>
            </button>
            <button className="habit-button habit-delete" onClick={this.handleDelete}>
                <i className="fas fa-trash"></i>
            </button>
            </li>
        )
    }
}
export default Habit;
