import React from 'react';
import logo from './assets/img/gci-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Google Code-in 2019
        </p>
        <a
          className="App-link"
          href="https://codein.withgoogle.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </header>
    </div>
  );
}

export default App;
