import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route></Route>
        <Route></Route>
      </Routes>
    </>
  )
}

export default App
