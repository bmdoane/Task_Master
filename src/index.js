import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hello: 'Welcome to Task Master'
    }
  }
  render() {
    return (
      <h1>{this.state.hello}</h1>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)