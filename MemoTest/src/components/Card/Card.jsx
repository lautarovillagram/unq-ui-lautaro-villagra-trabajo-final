import logo from '../../assets/libertadores-logo.png'
import './Card.css'
import { useState, useEffect } from 'react';

function Card( {card, resetSignal, whenClicked, revealedCards} ) {
const [isRevealed, setIsRevealed] = useState(false);

  const handleClick = () => {
    if (!isRevealed && revealedCards < 2) {
      setIsRevealed(true); 
      whenClicked(card.id);
    }
  };

  useEffect(() => {
    if (resetSignal && resetSignal.includes(card.id)) {
      setTimeout(() => setIsRevealed(false), 1000);      
    }
  }, [resetSignal]);
   
  return(        
    <div className={`card-wrapper ${isRevealed? 'clicked-card' : 'unclicked-card'}`} onClick={handleClick}  >
      <img className='card-image' src={isRevealed ? card.image : logo}/>       
    </div>
  );
}


export default Card;