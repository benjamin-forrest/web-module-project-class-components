import React from 'react'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'Walk the Dog',
          id: 1528817077286,
          completed: false
        },
        {
          name: 'Chase the Postman',
          id: 1528817077287,
          completed: false
        },
        {
          name: 'State your intentions',
          id: 1528817077288,
          completed: false
        },
        {
          name: 'Retreat back home',
          id: 1528817077289,
          completed: false
        }
      ]
    }
  }
  render() {
    const {todos} = this.state;
    return (
      <div>
        <h1>Todo</h1>
        <ul>
        {
          todos.map(todo=>{
            return (<li key={todo.id}>{todo.name}</li>)
          })
        }
        </ul>

        <form>
          <input/>
          <button>Submit</button>
          </form>
        <button>Hide Completed</button>
      </div>
    )
  }
}
