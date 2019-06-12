import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: '',
      tasks: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({ userInput: event.target.value })
  }
  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      tasks: this.state.tasks.concat(this.state.userInput)
    })
    document.getElementById("taskForm").reset()
  }
  render() {
    const tasks = this.state.tasks
    const taskList = tasks.map(task =>
      <li key={task}>
        {task}
      </li>
    )
    return (
      <div>
        <form id="taskForm" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Task to master"
            onChange={this.handleChange}
          />
          <button type="submit">
            Add Task
          </button>
        </form>
        <ul>{taskList}</ul>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)