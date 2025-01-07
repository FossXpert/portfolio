import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MO from './components/cp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className="text-5xl font-bold underline">
      Hello world!
      <MO/>
    </h1>
    </>
  )
}

export default App
