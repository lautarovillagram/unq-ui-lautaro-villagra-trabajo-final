import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Grid from './components/layout/Grid/Grid.jsx'
import './App.css'
import Menu from './components/layout/Menu/Menu.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Menu/>   
      
      
        
      <p>
        _______________________________________
      </p>
      <Grid/>
    
    </>
  )
}

export default App
