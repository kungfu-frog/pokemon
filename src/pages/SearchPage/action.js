import { gql } from '@apollo/client';
import { query } from '../../utils/graphql';
export const SET_POKEMONS = 'SET_POKEMONS';
export const SELECT_POKEMON = 'SELECT_POKEMON';
export const SET_LOADING = 'SET_LOADING';

const fetchPokemonsQuery = gql`
  query Pokemons($cnt: Int!){
    pokemons(first: $cnt) {
      id
      name
      image
    }
  }
`;

const fetchPokemonQuery = gql`
  query Pokemon($id: String!){
    pokemon(id: $id) {
      id
      number
      name
      weight{
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      attacks {
        fast{
          name
          type
          damage
        }
        special{
          name
          type
          damage
        }
      }
      weaknesses
      fleeRate
      maxCP
      evolutions {
        id
        name
        image
      }
      evolutionRequirements{
        amount
        name
      }
      maxHP
      image
    }
  }
`;

export const set_pokemon_list = (pokemons) => {
  return {
    type: SET_POKEMONS,
    payload: pokemons
  };
}

export const select_pokemon = (pokemon) => {
  return {
    type: SELECT_POKEMON,
    payload: pokemon
  };
}

export const set_loading = (loading) => {
  return {
    type: SET_LOADING,
    payload: loading
  };
}

export const fetch_pokemons = (cnt) => {
  return dispatch => {
    dispatch(set_loading(true));
    query({ query: fetchPokemonsQuery, variables: { cnt } })
    .then(({ data: {loading, error, pokemons } }) => {
      dispatch(set_pokemon_list(pokemons));
      dispatch(set_loading(false));
    })
    .catch((error) => {
      console.log(error);
    });
  }
}

export const fetch_pokemon = (id) => {
  return dispatch => {
    dispatch(set_loading(true));
    return query({ query: fetchPokemonQuery, variables: { id } })
    .then(({ data: {loading, error, pokemon } }) => {
      dispatch(select_pokemon(pokemon));
      dispatch(set_loading(false));
    })
    .catch((error) => {
      console.log(error);
    });
  }
}