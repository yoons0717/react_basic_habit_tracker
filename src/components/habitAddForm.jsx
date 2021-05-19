import React, { Component } from 'react'
 class HabitAddForm extends Component {
    render() {
        return (
            <form className="add-form">
                <input type="text" className="add-input" placeholder="Habit"></input>
                <button className="addbutton"></button>
            </form>
        )
    }
}

export default HabitAddForm