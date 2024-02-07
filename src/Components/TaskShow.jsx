import React, { useState } from "react"
import CreateTask from "./CreateTask"

import { useContext } from "react"
import TaskContext from "../context/TaskContext"

function TaskShow({ task }) {
  const { deleteTask, editTask } = useContext(TaskContext)
  const [showEdit, setShowEdit] = useState(false)
  const handleDeleteItem = () => {
    deleteTask(task.id)
  }
  const handleEditItem = () => {
    setShowEdit(!showEdit)
  }
  const handleSubmit = (id, upTask, upDesc) => {
    setShowEdit(false)
    editTask(id, upTask, upDesc)
  }

  return (
    <div className="w-[340px] border border-gray-600 rounded p-4 mr-4 mb-4">
      {showEdit ? (
        <CreateTask task={task} taskFromUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <>
          <div className="title pb-1 flex justify-between border-b border-b-gray-400">
            <h1
              className="text-[17px] w-[90%] font-semibold text-gray-700 break-words"
              dangerouslySetInnerHTML={{ __html: task.title }}
            ></h1>
            <div>
              <svg
                onClick={handleDeleteItem}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6 hover:text-red-700 cursor-pointer transition-colors"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          <div>
            <p
              className="text-sm font-mono py-1 break-words"
              dangerouslySetInnerHTML={{ __html: task.description }}
            ></p>
            <div className="editTask w-full flex justify-end">
              <svg
                onClick={handleEditItem}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.6"
                stroke="currentColor"
                className="w-6 h-6 hover:text-blue-700 cursor-pointer transition-colors"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default TaskShow
