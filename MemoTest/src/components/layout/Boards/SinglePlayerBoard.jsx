import { useEffect, useState } from "react"
import Grid from "../Grid/Grid";
import WinnerMessage from "../WinnerMessage/WinnerMessage";
import './SinglePlayerBoard.css'

function SinglePlayerBoard({size, toggleMenu}) {
    const [turns, setTurns] = useState(0);
    const [revealedPairs, setRevealedPairs] = useState(8);
    var pairs = (size * size) / 2;
    const [gameKey, setGameKey] = useState(0);


    function addTurn() {
        setTurns(turns + 1);
    }

    useEffect(() => {
        console.log(pairs + ' // ' + revealedPairs)
      }, [revealedPairs]);

    function gameEnded() {
        return revealedPairs === pairs;
    }

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
            <h2 className="sp-turns">Turnos: {turns}</h2>
            <Grid key={gameKey} board={size} turnCounter={addTurn} revealed={addRevealedPair}/>
            {gameEnded() && <WinnerMessage turns={turns} menu={toggleMenu} restart= {restartGame}/> }
        </div>
        
    )
}

export default SinglePlayerBoard;