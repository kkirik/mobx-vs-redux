import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import TestComponent from './redux/TestComponent';

function App() {
  return (
    <div className="App">
      <TestComponent propValue={'this value get from props'} />
    </div>
  );
}

export default App;
