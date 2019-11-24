import React, {Component} from 'react'

class List extends Component {
    

    render() {
        return(
            <div>
                <ul>
                    {
                        this.props.todos.map((todo) => <li style={{textDecoration : (todo.isDone) ? 'line-through' : 'none'}} onClick={() => this.props.toggleATodo(todo)}>{todo.text}</li>)
                    }
                </ul>
            </div>
        )
    }
}

export default List