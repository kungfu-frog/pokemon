import React from 'react';

import './style.scss';

const Inspect = ({ pokemon, visible, onClickOutside, onEvolutionClicked }) => {
  const hasCharacteristics = pokemon.classification && pokemon.types && pokemon.weaknesses && pokemon.resistant;

  const handleClickBackground = () => {
    onClickOutside();
  }

  const handleEvolutionClicked = (id) => {
    return () => {
      onEvolutionClicked && onEvolutionClicked(id);
    }
  }

  return (
    <div style={{display: (visible?'flex':'none')}} className="inspection-view">
      <div className="background" onClick={handleClickBackground}></div>
      <div className="inspect">
        { pokemon.name ? <div className="pokemon-name">{pokemon.name}</div> : null }
        { pokemon.image ? <div className="pokemon-image"><div><img src={pokemon.image}/></div></div> : null }
        {hasCharacteristics ? 
        <div>
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
        </div> : null}
        {pokemon.evolutions && pokemon.evolutions.length ? (
        <div>
          <h4>Evolutions</h4>
          <div className="evolutions">
            {pokemon.evolutions.map((evolution) => (
              <div className="evolution" onClick={handleEvolutionClicked(evolution.id)}>
                <div className="pokemon-image"><div><img src={evolution.image}/></div></div>
              </div>
            ))}
          </div>
        </div>
        ) : null}
      </div>
    </div>
  );
};

export default Inspect;