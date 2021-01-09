import { SET_POKEMONS, SELECT_POKEMON, SET_LOADING } from '../pages/SearchPage/action';

const initialState = {
  pokemons: [],
  selected_pokemon: {},
  loading: false
};

const DexReducer = (state = initialState, action) => {
  const { type, payload = null } = action; 
  switch (type) {
    case SET_POKEMONS: {
      if (payload !== null) 
        return { ...state, pokemons: [...payload] };
      return state;
    }
    case SELECT_POKEMON: {
      if (payload !== null)
        return { ...state, selected_pokemon: {...payload} };
      return state;
    }
    case SET_LOADING: {
      if (payload !== null)
        return { ...state, loading: payload};
      return state;
    }
    default: {
      return state;
    }
  }
}

export default DexReducer;