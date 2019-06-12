import React from 'react'

function TaskList(props) {
  const taskList = props.tasks.map(task =>
    <React.Fragment key={task}>
      <li>
        {task}
        <button onClick={props.handleDelete.bind(this, task)}>
          Delete Task
        </button>
      </li>
    </React.Fragment>
  )
  return (
    <ul>{taskList}</ul>
  )
}

export default TaskList