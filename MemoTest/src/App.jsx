import { useState } from 'react'
import Board from './components/layout/Board/Board.jsx'
import './App.css'
import Menu from './components/layout/Menu/Menu.jsx'

function App() {
  const [players, setPlayers] = useState(1);
  const [boardSize, setBoardSize] = useState(4);
  const [showMenu, setShowMenu] = useState(true);

  return (
    <>
      <div className="full-height">

      {showMenu ? 
      <Menu players={setPlayers} board={setBoardSize} start={setShowMenu}/>         
      :
      <Board size={boardSize} toggleMenu={setShowMenu} players={players}/>
      }
    </div>
    </>
  )
}

export default App;
