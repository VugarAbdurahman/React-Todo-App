import React, { useState } from "react"
import "../assets/css/CreateTask.css"

import { useContext } from "react"
import TaskContext from "../context/TaskContext"

const CreateTask = ({ task, taskFromUpdate, onUpdate }) => {
  const { createTask, editTask } = useContext(TaskContext)
  const [titleValue, setTitleValue] = useState(task ? task.title : "")
  const [descriptionValue, setDescriptionValue] = useState(
    task ? task.description : ""
  )

  const getTitleValue = (e) => {
    setTitleValue(e.target.value)
  }

  const getDescriptionValue = (e) => {
    setDescriptionValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (taskFromUpdate) {
      onUpdate(task.id, titleValue, descriptionValue)
    } else {
      createTask(titleValue, descriptionValue)
    }
    setTitleValue("")
    setDescriptionValue("")
  }

  return (
    <>
      {taskFromUpdate ? (
        <div className="w-full flex flex-col items-center border-2 rounded-xl p-4 mb-4">
          <h1 className="font-semibold text-2xl pb-4">React ToDo App</h1>
          <form onSubmit={handleSubmit} className="flex flex-col w-full">
            <label
              htmlFor="addTitle"
              className="font-semibold text-gray-800/80 mb-2"
            >
              Title
            </label>
            <input
              onChange={getTitleValue}
              value={titleValue}
              id="addTitle"
              placeholder="Title"
              className="form mb-4"
            />
            <label
              htmlFor="addDescription"
              className="font-semibold text-gray-800/80 mb-2"
            >
              Description
            </label>
            <textarea
              onChange={getDescriptionValue}
              value={descriptionValue}
              id="addDescription"
              placeholder="Description"
              className="resize-none w-full h-20 form"
            />
            <button
              type="submit"
              className="bg-emerald-800 rounded py-2 text-white font-semibold text-xl mt-4"
            >
              Edit
            </button>
          </form>
        </div>
      ) : (
        <div className="md:w-[500px] w-[340px] flex flex-col items-center border-2 rounded-xl p-4 mb-4">
          <h1 className="font-semibold text-2xl pb-4">React ToDo App</h1>
          <form onSubmit={handleSubmit} className="flex flex-col w-full">
            <label
              htmlFor="addTitle"
              className="font-semibold text-gray-800/80 mb-2"
            >
              Please Add Task
            </label>
            <input
              onChange={getTitleValue}
              value={titleValue}
              id="addTitle"
              placeholder="Title"
              className="form mb-4"
            />
            <label
              htmlFor="addDescription"
              className="font-semibold text-gray-800/80 mb-2"
            >
              Please Add Description
            </label>
            <textarea
              onChange={getDescriptionValue}
              value={descriptionValue}
              id="addDescription"
              placeholder="Description"
              className="resize-none w-full h-20 form"
            />
            <button
              type="submit"
              className="bg-blue-600 rounded py-2 text-white font-semibold text-xl mt-4"
            >
              Add
            </button>
          </form>
        </div>
      )}
    </>
  )
}
export default CreateTask
