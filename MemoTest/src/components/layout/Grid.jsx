import { useState } from 'react';
import Card from '../cards/Card.jsx';
import './Grid.css';
function Grid() {
    const [clickedCards, setClickedCards] = useState(0);


    
    return (
        <>
        <p>{clickedCards}</p>
        <div className="grid-wrapper">             
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>      
        </div>
        </>
    );
}

export default Grid;