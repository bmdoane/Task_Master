import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import TaskList from './components/TaskList'
import GetTask from './components/GetTask'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: '',
      tasks: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleChange(event) {
    this.setState({ userInput: event.target.value })
  }
  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      tasks: this.state.tasks.concat(this.state.userInput),
      userInput: ''
    })
    document.getElementById("taskForm").reset()
  }
  handleDelete(taskId) {
    this.setState( prevState => ({
      tasks: prevState.tasks.filter(task => task !== taskId)
    }))
  }
  render() {
    const { tasks, userInput } = this.state

    return (
      <React.Fragment>
        <GetTask
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          userInput={userInput}
        />
        <TaskList
          tasks={tasks}
          handleDelete={this.handleDelete}
        />
      </React.Fragment>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)