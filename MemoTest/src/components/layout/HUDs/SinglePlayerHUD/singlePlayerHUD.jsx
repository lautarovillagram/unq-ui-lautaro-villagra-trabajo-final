import WinnerMessage from "../../WinnerMessage/WinnerMessage"
import './SinglePlayerHUD.css'

function SinglePlayerHUD({playedTurns, returnToMenu, restartGame, gameStatus}) {
    return ( gameStatus ?
        <WinnerMessage turns={playedTurns} menu={returnToMenu} restart={restartGame}/>    
        :
        <div className="sp-turns">
            <h2>Turnos: </h2>
            <div className="sp-turns-counter">{playedTurns}</div>
        </div>
    )
            
}


export default SinglePlayerHUD;