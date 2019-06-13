import React from 'react'

function GetTask(props) {
  const isEnabled = props.userInput.length > 0
  console.log('here', props);
  return (
    <form id="taskForm" onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder="Task to master"
        onChange={props.handleChange}
      />
      <button type="submit" disabled={!isEnabled}>
        Add Task
      </button>
    </form>
  )
}

export default GetTask