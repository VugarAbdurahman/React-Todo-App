import TaskShow from "./TaskShow"
import { useEffect, useContext } from "react"
import TaskContext from "../context/TaskContext"

function TaskList() {
  const { tasks } = useContext(TaskContext)
  return (
    <div>
      {tasks.map((task, index) => {
        return <TaskShow key={index} task={task} />
      })}
    </div>
  )
}

export default TaskList
