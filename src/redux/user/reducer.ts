import {IGetUserAction} from './action';
import {GET_USER} from './constants';

export interface IUser {
  id: string;
  name: string;
  email: string;
}

export function user(state = {} as IUser, action: IGetUserAction) {
  switch (action.type) {
    case GET_USER:
      return action.data;

    default:
      return state;
  }
}
