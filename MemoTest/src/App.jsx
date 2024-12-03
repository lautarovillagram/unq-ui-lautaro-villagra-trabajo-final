import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Grid from './components/layout/Grid.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>MemoTest</h1>
      <p>Cantidad de jugadores</p>
      <button>1</button>
      <button>2</button>
      <p>Tamaño del tablero</p>
      <button>4x4</button>
      <button>6x6</button>
      <button>8x8</button>
      <div>        
      <button>Comenzar</button>    
      
      </div>  
        
      <p className="read-the-docs">
        _______________________________________
      </p>
      <Grid/>
    
    </>
  )
}

export default App
