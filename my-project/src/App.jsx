import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import "./index.css"; 


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col justify-center items-center'>
      <Home />
     </div>
  )
}

export default App
