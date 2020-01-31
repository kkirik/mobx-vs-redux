import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import App from './App';
import template from './template';
import {initStore, Store} from './redux/store';
import {Provider} from 'react-redux';

const server = express();

server.use('/assets', express.static('assets'));

server.get('/', (req, res) => {
  const initialState: Store = {
    user: {
      name: 'server',
      id: 'server',
      email: 'server@server.com',
    },
    orders: [],
  };
  const store = initStore(initialState);

  console.log('🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥');
  console.log('server', store.getState());
  console.log('🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥');

  const appString = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  res.send(
    template({
      body: appString,
      title: 'Hello World from the server',
      initialState: JSON.stringify(initialState),
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
