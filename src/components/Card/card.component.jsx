import React from 'react';
import './card.style.css'

export const Card = props => (
    <div className="card-container ">
        <img alt="monsters" src={`https://robohash.org/${props.monster.id}?set=set4&size=180x180`} />
        <p>{props.monster.id}</p>
        <h2>{props.monster.name}</h2>
    </div>
)
