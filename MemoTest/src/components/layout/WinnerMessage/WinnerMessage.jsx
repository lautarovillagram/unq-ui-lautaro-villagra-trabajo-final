import './WinnerMessage.css'

function WinnerMessage({turns, menu, restart, result}){

    function andTheWinnerIs() {
        console.log(result);
        return (
           result.winner === "tie" ?     
           <h2>El marcador quedó igualado {result.score}</h2>
       
            :
            <h2>Felicitaciones {result.winner}! Ganaste el partido por {result.score}</h2>



           
        )
    }
    return(
        <>
        <div className='winner-message-wrapper'>
        {!result ? 
            <h2>Felicitaciones! completaste el tablero en {turns} turnos</h2>
            :
            andTheWinnerIs()         
        
        }
        <div className="winner-message-buttons">
                <button onClick={restart}>Jugar revancha</button>
                <button onClick={menu}>menu principal</button>
        </div>
        </div>
            
        </>
    )
}


export default WinnerMessage;