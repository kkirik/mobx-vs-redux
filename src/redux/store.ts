import {createStore, combineReducers} from 'redux';
import {counter} from './counter/reducer';

export type Store = {
  counter: number;
};

export function initStore(initialState?: Store) {
  return createStore(
    combineReducers({
      counter,
    }),
    initialState
  );
}
