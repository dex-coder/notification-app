import React from 'react'
import { requestPermission } from './services/firebaseService'

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={requestPermission}>Configure Token</button>
    </div>
  );
}

export default App;
