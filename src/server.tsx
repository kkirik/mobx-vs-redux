import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import App from './App';
import template from './template';
import {initStore} from './redux/store';
import {Provider} from 'react-redux';

const server = express();

server.use('/assets', express.static('assets'));

server.get('/', (req: any, res: any) => {
  const initialState = {counter: 1000};
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

server.listen(8080);
