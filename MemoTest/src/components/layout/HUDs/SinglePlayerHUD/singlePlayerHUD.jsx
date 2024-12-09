import WinnerMessage from "../../WinnerMessage/WinnerMessage"

function SinglePlayerHUD({playedTurns, returnToMenu, restartGame, gameStatus}) {
    return ( gameStatus ?
        
    <div className="sp-turns">
        <h2>Turnos: </h2>
        <div className="sp-turns-counter">{playedTurns}</div>
    </div>
    :
    <WinnerMessage turns={playedTurns} menu={returnToMenu} restart={restartGame}/>
    )
            
}


export default SinglePlayerHUD;