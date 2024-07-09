import React from 'react';
import './App.css';
import Character from './Character';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Star Wars Characters</h1>
      </header>
      <main className="p-4">
        <Character />
      </main>
    </div>
  );
};

export default App;
