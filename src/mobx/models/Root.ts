import {types, onSnapshot, applySnapshot} from 'mobx-state-tree';

import {UserModel} from './User';
import {OrdersModel} from './Orders';

export const RootModel = types.model({
  user: UserModel,
  orders: OrdersModel,
});

export const rootStore = RootModel.create({
  user: {
    id: 'serverMobxId',
    email: 'serverMobxId@mail.com',
    name: 'serverMobxName',
  },
  orders: {
    items: [],
  },
});

onSnapshot(rootStore, snapshot => console.log('Snapshot: ', snapshot));

let store: typeof rootStore = null;

export function initStore(isServer: boolean, snapshot = null) {
  if (isServer) {
    store = rootStore;
  }

  if (store === null) {
    store = rootStore;
  }

  if (snapshot) {
    applySnapshot(store, snapshot);
  }

  return store;
}
