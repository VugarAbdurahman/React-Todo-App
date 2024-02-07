import React, { createContext, useState } from "react"

import axios from "axios"
const TaskContext = createContext()

const UserProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])
  const createTask = async (title, description) => {
    // Post Request
    const response = await axios.post("http://localhost:3000/tasks", {
      title: `<h1>${title}</h1>`,
      description: `<p>${description}</p>`,
    })
    setTasks([...tasks, response.data])
  }
  // Get Request
  const GetTaskToServer = async () => {
    const response = await axios.get("http://localhost:3000/tasks")
    setTasks(response.data)
  }
  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`)
    const afterDeletedTask = tasks.filter((task) => {
      return task.id !== id
    })
    setTasks(afterDeletedTask)
  }
  const editTask = async (id, taskTitle, taskDesc) => {
    await axios.put(`http://localhost:3000/tasks/${id}`, {
      title: taskTitle,
      description: taskDesc,
    })
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: taskTitle, description: taskDesc }
      }
      return task
    })
    setTasks(updatedTasks)
  }
  const AllValuesAndMethods = {
    tasks,
    createTask,
    GetTaskToServer,
    deleteTask,
    editTask,
  }
  return (
    <TaskContext.Provider value={AllValuesAndMethods}>
      {children}
    </TaskContext.Provider>
  )
}

export { UserProvider }
export default TaskContext
