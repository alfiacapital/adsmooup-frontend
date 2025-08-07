import React from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import Button from "@mui/material/Button";

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App