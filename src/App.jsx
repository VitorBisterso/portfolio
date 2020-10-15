import React from 'react';

import Translate from './components/Translate';
import TranslateButton from './components/TranslateButton';

import logo from './logo.svg';
import brFlag from './assets/img/brFlag.png';
import usFlag from './assets/img/usFlag.png';

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
        <TranslateButton language="en" flag={usFlag} />
        <TranslateButton language="pt" flag={brFlag} />
      </header>
    </div>
  );
};

export default App;
