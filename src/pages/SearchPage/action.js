import { gql } from '@apollo/client';
import { query } from '../../utils/graphql';
export const SET_POKEMONS = 'SET_POKEMONS';
const fetchPokemonQuery = (cnt) => {
  return gql`
    query {
      pokemons(first: ${cnt}) {
        id
        name
        image
      }
    }
  `;
}

export const init_pokeman_list = () => {
  return {
    type: SET_POKEMONS
  }
}

export const set_pokemon_list = (pokemons) => {
  return {
    type: SET_POKEMONS,
    payload: pokemons
  }
}

export const fetch_pokemons = (cnt) => {
  return dispatch => {
    dispatch(init_pokeman_list());
    query({ query: fetchPokemonQuery(cnt) })
    .then(({ data: {loading, error, pokemons } }) => {
      dispatch(set_pokemon_list(pokemons));
    })
    .catch((error) => {
      console.log(error);
    });
  }
}