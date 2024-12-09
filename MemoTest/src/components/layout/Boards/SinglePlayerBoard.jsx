import { useEffect, useState } from "react"
import Grid from "../Grid/Grid";
import WinnerMessage from "../WinnerMessage/WinnerMessage";
import './SinglePlayerBoard.css'
import MultiPayerHUD from '../HUDs/MultiPlayerHUD/MultiPlayerHUD.jsx'

function SinglePlayerBoard({size, toggleMenu, players}) {
    const [turns, setTurns] = useState(0);
    const [revealedPairs, setRevealedPairs] = useState(0);
    var pairs = (size * size) / 2;
    const [gameKey, setGameKey] = useState(0);


    function addTurn() {
        setTurns(turns + 1);
    }

    useEffect(() => {
        console.log(pairs + ' // ' + revealedPairs)
      }, [revealedPairs]);



    function addRevealedPair() {
        setRevealedPairs(revealedPairs + 1)
    }

    function restartGame() {
        setTurns(0); 
        setRevealedPairs(0); 
        setGameKey((prev) => prev + 1); 
      }

    return(
        
        <div className="board-wrapper">
            {players == 1 ?
             <MultiPayerHUD playedTurns={turns} revealedPairs={revealedPairs} totalPairs={pairs} returnToMenu={toggleMenu} restartGame={restartGame}/>
             :
             <div className="sp-turns">
               <h2>Turnos: </h2>
                  <div className="sp-turns-counter">{turns}</div>
                </div>
            }

            
            <Grid key={gameKey} board={size} turnCounter={addTurn} revealed={addRevealedPair}/>
        </div>
        
    )
}

export default SinglePlayerBoard;