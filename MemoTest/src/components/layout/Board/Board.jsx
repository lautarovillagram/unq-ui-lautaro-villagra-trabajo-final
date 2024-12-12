import { useEffect, useState } from "react"
import Grid from "../Grid/Grid.jsx";
import './Board.css'
import MultiPayerHUD from '../HUDs/MultiPlayerHUD/MultiPlayerHUD.jsx'
import SinglePlayerHUD from "../HUDs/SinglePlayerHUD/singlePlayerHUD.jsx";

function Board({size, toggleMenu, players}) {
    const [turns, setTurns] = useState(0);
    const [revealedPairs, setRevealedPairs] = useState(0);
    var pairs = (size * size) / 2;
    const [gameKey, setGameKey] = useState(0);


    function addTurn() {
        setTurns(turns + 1);
    }

    function addRevealedPair() {
        setRevealedPairs(revealedPairs + 1)
    }

    function restartGame() {
        setTurns(0); 
        setRevealedPairs(0); 
        setGameKey((prev) => prev + 1); 
    }

    function gameEnded() {
        return revealedPairs === pairs;
    }

    return(
        
        <div className="board-wrapper">
            {players === 1 ?
             <SinglePlayerHUD playedTurns={turns} returnToMenu={toggleMenu} restartGame={restartGame} gameStatus={gameEnded()}/>

             :
             <MultiPayerHUD key={gameKey+1} revealedPairs={revealedPairs} playedTurns={turns} gameStatus={gameEnded()} returnToMenu={toggleMenu} restartGame={restartGame}/>

             }

            
            <Grid key={gameKey} board={size} turnCounter={addTurn} revealed={addRevealedPair}/>
        </div>
        
    )
}

export default Board;