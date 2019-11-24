import React, {Component} from 'react'

class List extends Component {
    

    render() {
        return(
            <div>
                <ul>
                    {
                        this.props.todos.map((todo) => <p>{todo.text}</p>)
                    }
                </ul>
            </div>
        )
    }
}

export default List