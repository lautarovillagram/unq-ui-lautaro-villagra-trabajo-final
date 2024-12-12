import { useState, useEffect } from 'react';
import Card from '../../Card/Card.jsx';
import './Grid.css';
import data from '../../../data/Data.jsx';
import ShuffleArray from '../../../misc/ArrayShuffler.jsx';

function Grid( {board, turnCounter, revealed}) {
    const [shuffledCards, setShuffledCards] = useState([]);
    const [clickedCards, setClickedCards] = useState([]);       
    const [resetSignal, setResetSignal] = useState(null);


    useEffect(() => {      
      const selectedCards = data.cards.slice(0, (board * board))
      setShuffledCards(ShuffleArray(selectedCards));
    }, []);


    const handleCardClick = (card) => {
      if (clickedCards.length < 2) { 
        setClickedCards((prev) => [...prev, card]);
      }
    };

    const checkIfSameCard = () => {
      const [firstCard, secondCard] = clickedCards;
  
      if (firstCard.id === secondCard.id) {
        revealed();
      } else {
        triggerReset(clickedCards.map((card) => card.id));
      }
      setTimeout(() => setClickedCards([]), 1000);
      turnCounter();
      
    };

    const triggerReset = (idsToReset) => {
      setResetSignal(idsToReset);
      setTimeout(() => setResetSignal(null), 0); 
      
    };    


    useEffect(() => {
      if (clickedCards.length === 2) {
        checkIfSameCard();
      }
    }, [clickedCards]);  
    
    return (
      <>
      <div className={`grid-wrapper grid-columns-${board}`}>
        {shuffledCards.map((card, index) => (
        <Card key={index} card={card} revealedCards={clickedCards.length} resetSignal={resetSignal} whenClicked={() =>  handleCardClick({ id: card.id, index })  } /> 
        ))} 
      </div>
      </>
    );
}

export default Grid;