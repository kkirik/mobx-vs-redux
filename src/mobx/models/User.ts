import {types, flow, Instance} from 'mobx-state-tree';
import axios from 'axios';

export const UserModel = types
  .model('user', {
    id: types.identifier,
    name: types.string,
    email: types.maybe(types.string),
  })
  .actions(self => ({
    fetchUser: flow(function*() {
      const res = yield axios.get<{data: Instance<typeof self>}>('/user');
      const {name, email} = res.data;

      self.name = name;
      self.email = email;
    }),
  }))
  .actions(self => ({
    afterCreate() {
      self.fetchUser();
    },
  }));

export type IUserModel = Instance<typeof UserModel>;
