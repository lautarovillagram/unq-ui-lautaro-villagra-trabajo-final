function WinnerMessage({turns, menu, restart}){
    return(
        <>
        <h2>Felicitaciones! completaste el tablero en {turns} turnos</h2>
        <button onClick={restart}>Reiniciar</button>
        <button onClick={menu}>menu principal</button>
        </>
    )
}


export default WinnerMessage;