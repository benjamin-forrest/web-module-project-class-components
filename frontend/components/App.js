import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Todo</h1>
        <ul>
        <li>Walk the Dog</li>
        <li>Chase the Postman</li>
        <li>State your intentions</li>
        <li>Retreat back home</li>
        </ul>
        <form><input/><button>Submit</button></form>
        <button>Hide Completed</button>
      </div>
    )
  }
}
