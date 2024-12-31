import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Simple React App</h1>
        <p>This is a simple front-end React example.</p>
        <button onClick={() => alert('Hello, React!')}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
