import {types, Instance} from 'mobx-state-tree';

export const OrderModel = types.maybe(
  types.model('order', {
    id: types.identifier,
    name: types.string,
  })
);

export type IOrderModel = Instance<typeof OrderModel>;
