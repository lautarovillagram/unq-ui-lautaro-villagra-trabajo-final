import './Menu.css';
import logo from '../../../assets/logo.png'
import { useState } from 'react';


function Menu({ players, board, start }) {
    const [selectedPlayer, setSelectedPlayer] = useState(1);
    const [selectedBoard, setSelectedBoard] = useState(4);

   
  
    const handlePlayerSelection = (playerCount) => {
      setSelectedPlayer(playerCount); 
      players(playerCount); 
    };
  
    const handleBoardSelection = (boardSize) => {
      setSelectedBoard(boardSize);
      board(boardSize);
    };
  
    return (
      <>
        <div className="menu-wrapper">
          <img src={logo} alt="Logo" />
          <div className="menu-settings">
            <h2>Cantidad de jugadores</h2>
            <button
              className={selectedPlayer === 1 ? 'selected' : ''}
              onClick={() => handlePlayerSelection(1)}
            >
              1
            </button>
            <button
              className={selectedPlayer === 2 ? 'selected' : ''}
              onClick={() => handlePlayerSelection(2)}
            >
              2
            </button>
            <h2>Tamaño del tablero</h2>
            <button
              className={selectedBoard === 4 ? 'selected' : ''}
              onClick={() => handleBoardSelection(4)}
            >
              4x4
            </button>
            <button
              className={selectedBoard === 6 ? 'selected' : ''}
              onClick={() => handleBoardSelection(6)}
            >
              6x6
            </button>
            <button
              className={selectedBoard === 8 ? 'selected' : ''}
              onClick={() => handleBoardSelection(8)}
            >
              8x8
            </button>
          </div>
        </div>
        <button onClick={() => start(false)}>comenzar</button>
      </>
    );
  }


export default Menu;