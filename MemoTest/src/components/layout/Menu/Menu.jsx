import './Menu.css';
import logo from '../../../assets/logo.png'


function Menu({players, board, start}) {
    
    return(
        <>
        <div>
            <img src={logo}/>
            <h2>Cantidad de jugadores</h2>
            <button onClick={ () => players(1)}>1</button>
            <button onClick={ () => players(2)}>2</button>
            <h2>Tamaño del tablero</h2>
            <button onClick={ () => board(4)}>4x4</button>
            <button onClick={ () => board(6)}>6x6</button>
            <button onClick={ () => board(8)}>8x8</button>   
        </div>
        <button onClick={ () => start(false)}>comenzar</button>     
        </>
    )
}


export default Menu;