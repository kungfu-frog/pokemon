import React from 'react';

import './style.scss';

const Inspect = ({ pokemon, onClickOutside, visible }) => {
  console.log(pokemon);
  const handleClickBackground = () => {
    onClickOutside();
  }

  return (
    <div style={{display: (visible?'flex':'none')}} className="inspection-view">
      <div className="background" onClick={handleClickBackground}></div>
      <div className="inspect">
        <div className="pokemon-name">{pokemon.name}</div>
        <div className="pokemon-image"><div><img src={pokemon.image}/></div></div>
        <h4>Characteristics</h4>
        <ul className="characteristics">
          <li>
            <div className="characteristic-title">Classification</div>
            <span className="tag">{pokemon.classification}</span>
          </li>
          <li>
            <div className="characteristic-title">Type</div>
            <div>
              {pokemon.types && pokemon.types.map((type) => (
                <span className="tag">{type}</span>
              ))}
            </div>
          </li>
          <li>
            <div className="characteristic-title">Weaknesses</div>
            <div>
              {pokemon.weaknesses && pokemon.weaknesses.map((type) => (
                <span className="tag">{type}</span>
              ))}
            </div>
          </li>
          <li>
            <div className="characteristic-title">Resistant</div>
            <div>
              {pokemon.resistant && pokemon.resistant.map((type) => (
                <span className="tag">{type}</span>
              ))}
            </div>
          </li>
        </ul>
        <h4>Evolutions</h4>
        {pokemon.evolutions && pokemon.evolutions.length ? (
          <div className="evolutions">
            {pokemon.evolutions.map((evolution) => (
              <div className="evolution">
                <div className="pokemon-image"><div><img src={evolution.image}/></div></div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Inspect;