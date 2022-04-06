import React from 'react';
import './App.css';
import SongContainer from './containers/SongContainer';

function App() {
  return (
    <div className = "app">
      <h1>Top 20</h1>
      <SongContainer />
    </div>
  );
}

export default App;
