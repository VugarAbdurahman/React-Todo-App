import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { UserProvider } from "./context/TaskContext"
import "./assets/css/tailwind.css"
import "./App.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <App />
  </UserProvider>
)
