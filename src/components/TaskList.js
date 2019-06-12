import React from 'react'

function TaskList(props) {
  console.log('comp', props.tasks)
  const taskList = props.tasks.map(task =>
    <li key={task}>
      {task}
    </li>
  )
  return (
    <ul>{taskList}</ul>
  )
}

export default TaskList