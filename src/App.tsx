import React from 'react';
import scale from './scales/g-major-two-octaves-hands-together.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>G major</p>
        <img src={scale} className="scale" alt="G major two octave hands together" />
      </header>
    </div>
  );
}

export default App;
