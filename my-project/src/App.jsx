import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 import Header from './components/Header/Header'
import Home from './components/Home/Home'
import "@fontsource/outfit"; // Default weight 400
import "./index.css"; // Ensure Tailwind styles are applied


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col justify-center items-center'>
      <Home />
     </div>
  )
}

export default App
