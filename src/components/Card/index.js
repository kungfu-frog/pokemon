import React from 'react';
import './style.scss';

const Card = ({id, image, name, onClick}) => {
  const handleClick = () => {
    onClick(id);
  }

  return (
    <div className="pokemon-card">
      <img className="pokemon-image" src={image} onClick={handleClick}/>
      <span className="pokemon-name">{name}</span>
    </div>
  );
}

export default Card;