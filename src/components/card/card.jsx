import React from 'react';
import './card.css';

export const Card = (props) => (
    <div className='card-container'>
        <img 
            alt="monster"
            src={`https://robohash.org/${props.monster.id}?set=set3&size=250x250`}
        />
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
);