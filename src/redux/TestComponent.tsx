import React, {FC, useEffect} from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import axios from 'axios';

import {Store, StoreAction} from './store';
import {IUser} from './user/reducer';
import {IOrder} from './orders/reducer';
import {getOrdersAction, IGetOrdersAction} from './orders/action';
import {getUser, IGetUserAction} from './user/action';

interface ITestComponentsProps {
  propValue: string;
}

type Props = ITestComponentsProps & IMapDispatchToProps & IMapStateToProps;

const TestComponent: FC<Props> = ({propValue, user, getOrders, getUser, orders}) => {
  useEffect(() => {
    async function loadUser() {
      const res = await axios.get<IUser>('/user');

      getUser(res.data);
    }

    async function loadOrders() {
      const res = await axios.get<IOrder[]>('/orders');

      getOrders(res.data);
    }

    loadUser();
    loadOrders();
  }, []);

  return (
    <>
      {propValue && <div>{propValue}</div>}
      <div className="value">
        User:
        <div>{user.id}</div>
        <div>{user.name}</div>
        <div>{user.email}</div>
      </div>

      <div>
        Orders:
        {orders.map(order => (
          <div key={order.id}>{order.name}</div>
        ))}
      </div>
    </>
  );
};

interface IMapStateToProps {
  user: IUser;
  orders: IOrder[];
}

interface IMapDispatchToProps {
  getUser: (user: IUser) => IGetUserAction;
  getOrders: (orders: IOrder[]) => IGetOrdersAction;
}

const mapStateToProps = (state: Store): IMapStateToProps => ({
  user: state.user,
  orders: state.orders,
});

const mapDispatchToProps = (dispatch: Dispatch<StoreAction>): IMapDispatchToProps => ({
  getUser: user => dispatch(getUser(user)),
  getOrders: orders => dispatch(getOrdersAction(orders)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);
