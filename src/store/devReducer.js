import { SET_POKEMONS } from '../pages/SearchPage/action';

const initialState = {
  pokemons: [],
  selected_pokemon: {}
};

const DexReducer = (state = initialState, action) => {
  const { type, payload = null } = action; 
  switch (type) {
    case SET_POKEMONS: {
      if (payload !== null) 
        return { ...state, pokemons: [...payload] };
      return state;
    }
    
    default: {
      return state;
    }
  }
}

export default DexReducer;