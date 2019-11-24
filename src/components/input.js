import React, {Component} from 'react'
import Todo from '../models/Todo'

class Input extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todoText : ''
        }
    }

    onChangeText = (event) => {
        this.setState({todoText : event.target.value})
    }

    onClick = () => {
        let newTodo = new Todo(this.state.todoText)
        this.props.addTodo(newTodo)
        this.setState({todoText : ''})
    }

    render() {
        return (
            <div>
                <input value={this.state.todoText} onChange = {this.onChangeText}/>
                <button onClick={this.onClick}>Submit</button>
            </div>
        )
    }
}

export default Input