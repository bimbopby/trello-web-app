import React from 'react';
import './Card.scss'


function Card(props){
    const { card } = props
    
    return(
        <li className="card-item">
            {card.cover && <img src={card.cover} className="card-cover" alt='duc-alt-img'  /> }         
            Title: ABC
        
        </li>
    )
}

export default Card