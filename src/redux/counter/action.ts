import {RESET_VALUE, INCREASE_VALUE, DESCREASE_VALUE} from './constants';

export interface IIncAction {
  type: typeof INCREASE_VALUE;
}

export interface IDecAction {
  type: typeof DESCREASE_VALUE;
}

export interface IResetAction {
  type: typeof RESET_VALUE;
}

export type CalculationAction = IIncAction | IDecAction | IResetAction;

export const increaseAction = (): IIncAction => ({
  type: INCREASE_VALUE,
});

export const decreaseAction = (): IDecAction => ({
  type: DESCREASE_VALUE,
});

export const resetAction = (): IResetAction => ({
  type: RESET_VALUE,
});
