import { combineReducers } from 'redux'
import DexReducer from './devReducer';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    dex: DexReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
