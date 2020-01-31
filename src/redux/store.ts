import {createStore, combineReducers} from 'redux';
import {user, IUser} from './user/reducer';
import {orders, IOrder} from './orders/reducer';
import {IGetUserAction} from './user/action';
import {OrdersAction} from './orders/action';

export type Store = {
  user: IUser;
  orders: IOrder[];
};

export type StoreAction = IGetUserAction | OrdersAction;

export function initStore(initialState?: Store) {
  return createStore<Store, StoreAction, any, any>(
    combineReducers({
      user,
      orders,
    }),
    initialState
  );
}
