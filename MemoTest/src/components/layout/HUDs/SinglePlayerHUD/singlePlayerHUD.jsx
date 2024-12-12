import WinnerMessage from "../../WinnerMessage/WinnerMessage"
import './SinglePlayerHUD.css'

function SinglePlayerHUD({playedTurns, returnToMenu, restartGame, gameStatus}) {
    return ( gameStatus ?
        <WinnerMessage turns={playedTurns} menu={returnToMenu} restart={restartGame}/>    
        :
        <div className="sp-turns">
            <h2>Turnos: {playedTurns}</h2>
        </div>
    )
            
}


export default SinglePlayerHUD;