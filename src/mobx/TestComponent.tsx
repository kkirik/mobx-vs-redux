import React, {FC} from 'react';
import {observer, inject} from 'mobx-react';

import {IUserModel} from './models/User';
import {IOrdersModel} from './models/Orders';

interface ITestComponentsProps {
  propValue: string;
  user?: IUserModel;
  orders?: IOrdersModel;
}

export const TestComponent: FC<ITestComponentsProps> = inject(
  'user',
  'orders'
)(
  observer(({propValue, user, orders}) => (
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
        {orders.items.map(order => (
          <div key={order.id}>{order.name}</div>
        ))}
      </div>
    </>
  ))
);
