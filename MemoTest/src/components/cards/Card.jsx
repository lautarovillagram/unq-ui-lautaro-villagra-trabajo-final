import logo from '../../assets/react.svg'
import './Card.css'
import { useState, useEffect } from 'react';

function Card( {id, image, resetSignal, whenClicked, revealedCards} ) {
const [isRevealed, setIsRevealed] = useState(false);




  const handleClick = () => {
    if (!isRevealed && revealedCards < 2) {
      setIsRevealed(true); 
      whenClicked(id);
    }
  };

  useEffect(() => {
    if (resetSignal) {
      setTimeout(() => setIsRevealed(false), 1000);
      
    }
  }, [resetSignal]);
   
  return(        
    <div className={`card-wrapper ${isRevealed? 'clicked-card' : 'unclicked-card'}`} onClick={handleClick}  >
      <img className='card-image' src={isRevealed ? image : logo}/>       
    </div>
  );
}


export default Card;