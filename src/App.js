import React, { useEffect } from 'react'
import { requestPermission } from './services/firebaseService';

function App() {
  useEffect(()=>{
    requestPermission()
  },[])
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
