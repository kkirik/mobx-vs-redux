import {GET_USER} from './constants';
import {IUser} from './reducer';

export interface IGetUserAction {
  type: typeof GET_USER;
  data: IUser;
}

export const getUser = (user: IUser): IGetUserAction => ({
  type: GET_USER,
  data: user,
});
