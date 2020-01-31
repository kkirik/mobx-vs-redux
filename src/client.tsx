import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './App';
import {initStore} from './redux/store';

const store = initStore((window as any).__APP_INITIAL_STATE__);

console.log('🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥');
console.log('client', (window as any).__APP_INITIAL_STATE__);
console.log('🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥');

ReactDOM.hydrate(
  <Provider store={store}>
    <App {...(window as any).__APP_INITIAL_STATE__} />
  </Provider>,
  document.getElementById('root')
);
