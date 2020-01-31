import {CalculationAction} from './action';
import {RESET_VALUE, INCREASE_VALUE, DESCREASE_VALUE} from './constants';

export function counter(state: number = 0, action: CalculationAction) {
  switch (action.type) {
    case INCREASE_VALUE:
      return state + 1;

    case DESCREASE_VALUE:
      return state - 1;

    case RESET_VALUE:
      return 0;

    default:
      return state;
  }
}
