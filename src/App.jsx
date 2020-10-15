import React from 'react';

import Translate from './components/translate';

import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          Edit <code>src/App.js</code> and save to reload
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Translate tKey="test_message.learn_react" />
        </a>
      </header>
    </div>
  );
};

export default App;
