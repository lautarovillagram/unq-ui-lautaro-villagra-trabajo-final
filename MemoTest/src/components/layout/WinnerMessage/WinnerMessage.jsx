import './WinnerMessage.css'

function WinnerMessage({turns, menu, restart}){
    return(
        <>
        <h2>Felicitaciones! completaste el tablero en {turns} turnos</h2>
        <div className="SP-winner-message-buttons">
            <button onClick={restart}>Reiniciar</button>
            <button onClick={menu}>menu principal</button>
        </div>
        </>
    )
}


export default WinnerMessage;