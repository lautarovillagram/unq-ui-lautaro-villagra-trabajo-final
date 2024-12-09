import { useEffect, useState } from "react";
import './MultiPlayerHUD.css'
import WinnerMessage from "../../WinnerMessage/WinnerMessage";

function MultiPlayerHUD({playedTurns, revealedPairs, totalPairs, returnToMenu, restartGame}) {
    const [player1Score, setPlayer1Score] = useState(0);
    const [player2Score, setPlayer2Score] = useState(0);
    const [playerTurn, setPlayerTurn] = useState(null);

    useEffect(() => {
        addPointToPlayer();
      }, [revealedPairs]);

    
    useEffect(() => {
      if (playerTurn == 1) {
        setPlayerTurn(2);
      } else {
        setPlayerTurn(1);
      }
    }, [playedTurns]);

    function gameEnded() {
        return revealedPairs === totalPairs;
    }

    function winner() {
        if (player1Score > player2Score) {
            return {winner:"Jugador 1", score:{player1Score} + "-" + {player2Score} };
        } else if (player2Score > player1Score) {
            return {winner:"Jugador 2", score:{player2Score} + "-" + {player1Score} };
        } else {
            return {winner:"tie", score:{player1Score} + "-" + {player2Score} };
        }
    }
    
    function addPointToPlayer() {
        if (playerTurn === 1) {
            setPlayer1Score(player1Score + 1);
        } else {
            setPlayer2Score(player2Score + 1);
        }
    }


    return (
        <>
        
        {!gameEnded() ?
            <div className="mp-score-wrapper">
            <p>Jugador 1 F.C.</p>
            <div className="score">
                <p>{player1Score} - {player2Score}</p>

            </div>
            <p>C.A. Jugador 2</p>
            <div className="mp-turns">{playedTurns}</div>
            
            <h2>Turno de {playerTurn}</h2>
            </div>
            
        :
        <WinnerMessage turns={playedTurns} menu={returnToMenu} restart={restartGame} result={winner}/>
        }
        
        
        </>
    )



}

export default MultiPlayerHUD;