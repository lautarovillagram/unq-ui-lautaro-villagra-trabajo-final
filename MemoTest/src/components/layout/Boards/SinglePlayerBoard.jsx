import { useEffect, useState } from "react"
import Grid from "../Grid/Grid";

function SinglePlayerBoard({size, menu}) {
    const [turns, setTurns] = useState(0);
    const [revealedPairs, setRevealedPairs] = useState(0);
    var pairs = (size * size) / 2;

    function addTurn() {
        setTurns(turns + 1);
    }

    useEffect(() => {
        console.log(pairs + ' // ' + revealedPairs)
      }, [revealedPairs]);

    function gameEnded() {
        return revealedPairs === pairs;
    }

    function addRevealedPair() {
        setRevealedPairs(revealedPairs + 1)
    }


    return(
        <>
        <h2>Turnos: {turns}</h2>
        <Grid board={size} turnCounter={addTurn} revealed={addRevealedPair}/>
        {gameEnded() && <h2>Winner winner chicken dinner</h2>}
        </>
    )
}

export default SinglePlayerBoard;