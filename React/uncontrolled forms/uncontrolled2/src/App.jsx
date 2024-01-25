import { useState } from 'react'
import './App.css'
import Uncontrolled from './Uncontrolled'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Uncontrolled></Uncontrolled>
    </>
  )
}

export default App
