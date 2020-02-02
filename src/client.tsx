import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import {onSnapshot} from 'mobx-state-tree';

import App from './App';
import {initStore} from './mobx/models/Root';

const store = initStore(false, (window as any).__APP_INITIAL_STATE__);

onSnapshot(store, snapshot => console.log('Snapshot: ', snapshot));

console.log('🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥');
console.log('client', (window as any).__APP_INITIAL_STATE__);
console.log('🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥');

ReactDOM.hydrate(
  <Provider {...store}>
    <App {...(window as any).__APP_INITIAL_STATE__} />
  </Provider>,
  document.getElementById('root')
);
