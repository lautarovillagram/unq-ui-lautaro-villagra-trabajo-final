import { useEffect, useState } from "react";
import './MultiPlayerHUD.css'
import WinnerMessage from "../../WinnerMessage/WinnerMessage";
import logo from '../../../../assets/libertadores-logo.png'

function MultiPlayerHUD({playedTurns, revealedPairs, gameStatus, returnToMenu, restartGame}) {
    const [player1Score, setPlayer1Score] = useState(0);
    const [player2Score, setPlayer2Score] = useState(0);
    const [playerTurn, setPlayerTurn] = useState(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (isMounted) {
            addPointToPlayer();
        } else {
            setIsMounted(true);
        }
      }, [revealedPairs]);

    
    useEffect(() => {
      if (playerTurn == 1) {
        setPlayerTurn(2);
      } else {
        setPlayerTurn(1);
      }
    }, [playedTurns]);


    

    function winner() {
        if (player1Score > player2Score) {
            return {winner:"Jugador 1", score: `${player1Score}-${player2Score}` };
        } else if (player2Score > player1Score) {
            return {winner:"Jugador 2", score: `${player2Score}-${player1Score}` };
        } else {
            return {winner:"tie", score: `${player1Score}-${player2Score}` };
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
        
        {gameStatus ?
        <WinnerMessage turns={playedTurns} menu={returnToMenu} restart={restartGame} result={winner()}/>
          
        :
        <div className="mp-score-wrapper">
            <div className="mp-score">
                <img src={logo}/>
                <p className="mp-score-padding">J1 F.C.</p>
                    <div className="score">
                        <p>{player1Score} - {player2Score}</p>

                    </div>
                <p>C.A. J2</p>
                <h2>{playedTurns}</h2>
            </div>
        
        <h2>Turno de Jugador {playerTurn}</h2>
        </div>
        
        
        }
        
        
        </>
    )



}

export default MultiPlayerHUD;