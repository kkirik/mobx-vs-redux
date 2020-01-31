import {GET_ORDERS, UPDATE_ORDERS, DELETE_ORDERS} from './constants';
import {IOrder} from './reducer';

export interface IGetOrdersAction {
  type: typeof GET_ORDERS;
  data: IOrder[];
}

export interface IUpdateOrdersAction {
  type: typeof UPDATE_ORDERS;
  data: IOrder[];
}

export interface IDeleteOrdersAction {
  type: typeof DELETE_ORDERS;
  data: IOrder[];
}

export type OrdersAction = IGetOrdersAction | IUpdateOrdersAction | IDeleteOrdersAction;

export const getOrdersAction = (orders: IOrder[]): IGetOrdersAction => ({
  type: GET_ORDERS,
  data: orders,
});

export const updateOrdersAction = (orders: IOrder[]): IUpdateOrdersAction => ({
  type: UPDATE_ORDERS,
  data: orders,
});

export const deleteOrdersAction = (orders: IOrder[]): IDeleteOrdersAction => ({
  type: DELETE_ORDERS,
  data: orders,
});
