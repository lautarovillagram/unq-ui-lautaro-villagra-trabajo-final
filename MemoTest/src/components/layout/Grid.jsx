import { useState, useEffect } from 'react';
import Card from '../cards/Card.jsx';
import './Grid.css';
import data from '../../mock/cards.json';

function Grid() {
    const [clickedCards, setClickedCards] = useState([]);       
    const [resetSignal, setResetSignal] = useState(false);

    const handleCardClick = (card) => {
      if (clickedCards.length < 2) { 
        setClickedCards((prev) => [...prev, card]);
      }
    };

    const checkIfSameCard = () => {
      const [firstCard, secondCard] = clickedCards;
  
      if (firstCard.id === secondCard.id) {
        console.log("same cards");
      } else {
        console.log("different cards");
        triggerReset();
      }
      setTimeout(() => setClickedCards([]), 1000);
      
    };

    const triggerReset = () => {
      setResetSignal(true);
      setTimeout(() => setResetSignal(false), 0); 
    };


    useEffect(() => {
      if (clickedCards.length === 2) {
        checkIfSameCard();
      }
    }, [clickedCards]);
   

    
    return (
        <>
        <div className="grid-wrapper">             
          {data.cards.map((card, index) => (
          <Card key={index} id={card.id} image={card.image} revealedCards={clickedCards.length} resetSignal={resetSignal} whenClicked={() =>  handleCardClick({ id: card.id, index })  } /> 
          ))} 
        </div>
        </>
    );
}

export default Grid;