import React from 'react'

function GetTask(props) {
  return (
    <form id="taskForm" onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder="Task to master"
        onChange={props.handleChange}
      />
      <button type="submit">
        Add Task
      </button>
    </form>
  )
}

export default GetTask