import { useState } from 'react'
import SinglePlayerBoard from './components/layout/Boards/SinglePlayerBoard.jsx'
import './App.css'
import Menu from './components/layout/Menu/Menu.jsx'

function App() {
  const [players, setPlayers] = useState(1);
  const [boardSize, setBoardSize] = useState(4);
  const [showMenu, setShowMenu] = useState(true);

  return (
    <>
      

      {showMenu ? 
      <Menu players={setPlayers} board={setBoardSize} start={setShowMenu}/>         
      :
      <SinglePlayerBoard size={boardSize} start={setShowMenu}/>
      }
    
    </>
  )
}

export default App
