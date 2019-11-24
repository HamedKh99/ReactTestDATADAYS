import React from 'react';
import logo from './logo.svg';
import Input from './components/input'
import List from './components/list'

class App extends React.Component {

constructor(props) {
    super(props)
    this.state = {
        todos : []
    }
}

addTodo = (todo) => {
    let newTodos = this.state.todos
    newTodos.push(todo)
    this.setState({todos : newTodos})
}

  render() {
    return (
      <div className="App">
        <Input addTodo={this.addTodo}/>
        <List todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
