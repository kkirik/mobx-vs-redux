import {OrdersAction} from './action';
import {GET_ORDERS, UPDATE_ORDERS, DELETE_ORDERS} from './constants';

export interface IOrder {
  id: string;
  name: string;
}

export function orders(state: IOrder[] = [], action: OrdersAction) {
  switch (action.type) {
    case GET_ORDERS:
      return action.data;

    case UPDATE_ORDERS:
      return action.data;

    case DELETE_ORDERS:
      return action.data;

    default:
      return state;
  }
}
