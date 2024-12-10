import './WinnerMessage.css'

function WinnerMessage({turns, menu, restart, result}){

    function andTheWinnerIs() {
        console.log(result);
        return (
           result.winner === "tie" ?     
           <h2>El marcador quedó igualado {result.score}</h2>
       
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
                <button onClick={restart}>Revancha</button>
                <button onClick={menu}>menu principal</button>
            </div>
            
        </>
    )
}


export default WinnerMessage;