import logo from '../../assets/react.svg'
import alien from '../../assets/alien.svg'
import './Card.css'
import { useState } from 'react';

function Card( clicked ) {
const [isClicked, setIsClicked] = useState(false);



  const handleClick = () => {
    setIsClicked(!isClicked); 
  };
   
    return(        
        <div className={`card-wrapper ${isClicked ? 'clicked-card' : 'unclicked-card'}`} onClick={handleClick}  >
            <img className='card-image' src={isClicked ? logo : alien}/>       
        </div>
    );
}


export default Card;