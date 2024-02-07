import CreateTask from "./Components/CreateTask"
import TaskList from "./Components/TaskList"

import { useEffect, useContext } from "react"
import TaskContext from "./context/TaskContext"

const App = () => {
  const { GetTaskToServer } = useContext(TaskContext)
  useEffect(() => {
    GetTaskToServer()
  }, [])

  return (
    <div className="w-full h-full">
      <div className="flex flex-col h-screen py-10">
        <div className="w-full flex justify-center">
          <CreateTask />
        </div>
        <div className="flex flex-wrap justify-center">
          <TaskList />
        </div>
      </div>
    </div>
  )
}

export default App
