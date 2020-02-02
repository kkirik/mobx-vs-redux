import {types, flow, Instance} from 'mobx-state-tree';
import axios from 'axios';
import {OrderModel} from './Order';

export const OrdersModel = types.maybe(
  types
    .model('orders', {
      items: types.optional(types.array(OrderModel), []),
    })
    .actions(self => ({
      fetchOrders: flow(function*() {
        const res = yield axios.get('/orders');

        self.items = res.data;
      }),
      updateOrders: flow(function*() {
        const res = yield axios.put('/orders');

        self.items = res.data;
      }),
      deleteOrders: flow(function*() {
        const res = yield axios.delete('/orders');

        self.items = res.data;
      }),
    }))
    .actions(self => ({
      afterCreate() {
        self.fetchOrders();
      },
    }))
);

export type IOrdersModel = Instance<typeof OrdersModel>;
