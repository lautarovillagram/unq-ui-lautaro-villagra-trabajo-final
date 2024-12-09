import './WinnerMessage.css'

function WinnerMessage({turns, menu, restart, result}){

    function andTheWinnerIs() {
        return (
           result.winner === "tie" ?            
            <p>El marcador quedó igualado {result.score}</p>
            :
            <p>Felicitaciones {result.winner}! Ganaste el partido por {result.score}</p>

           
        )
    }
    return(
        <>
        {!result ? 
            <h2>Felicitaciones! completaste el tablero en {turns} turnos</h2>
            :
            andTheWinnerIs()         
        
        }
        <div className="SP-winner-message-buttons">
                <button onClick={restart}>Reiniciar</button>
                <button onClick={menu}>menu principal</button>
            </div>
            
        </>
    )
}


export default WinnerMessage;