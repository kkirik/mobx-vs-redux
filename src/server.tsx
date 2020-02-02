import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import template from './template';
import {Provider} from 'mobx-react';
import {getSnapshot, onSnapshot} from 'mobx-state-tree';

import App from './App';
import {initStore} from './mobx/models/Root';

const server = express();

server.use('/assets', express.static('assets'));

const store = initStore(true);

onSnapshot(store, snapshot => console.log('Snapshot: ', snapshot));

server.get('/', (req, res) => {
  console.log('🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥');
  console.log('server', store);
  console.log('🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥');

  const appString = renderToString(
    <Provider {...store}>
      <App />
    </Provider>
  );

  res.send(
    template({
      body: appString,
      title: 'Hello World from the server',
      initialState: JSON.stringify(getSnapshot(store)),
    })
  );
});

server.get('/user', (req, res) => {
  res.send({
    id: '1',
    name: 'testName',
    email: 'test@test.com',
  });
});

server.get('/orders', (req, res) => {
  res.send([
    {
      id: '1',
      name: 'order1',
    },
    {
      id: '2',
      name: 'order2',
    },
  ]);
});

server.put('/orders', (req, res) => {
  res.send([
    {
      id: '1',
      name: 'order1',
    },
    {
      id: '2',
      name: 'order2',
    },
  ]);
});

server.delete('/orders', (req, res) => {
  res.send([
    {
      id: '1',
      name: 'order1',
    },
    {
      id: '2',
      name: 'order2',
    },
  ]);
});

server.listen(8080);
