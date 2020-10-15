import React from 'react';

import Translate from '../Translate';
import TranslateDropdown from '../TranslateDropdown';

import logo from '../../assets/img/logo.png';
import myself from '../../assets/img/me.jpg';

import './index.css';

const Home = () => (
  <div className="container">
    <div className="header">
      <div className="logoContainer">
        <img className="logo" alt="logo" src={logo} />
      </div>

      <div className="menuFlags">
        <div className="menu">
          <ul>
            <li>
              <Translate tKey="header.about" />
            </li>
            <li>
              <Translate tKey="header.academic" />
            </li>
            <li>
              <Translate tKey="header.professional" />
            </li>
          </ul>
        </div>

        <div className="selectLanguage">
          <TranslateDropdown />
        </div>
      </div>
    </div>

    <div className="homeBody">
      <div className="title">
        <Translate tKey="header.title" />
      </div>

      <img alt="me" src={myself} className="myPicture" />
    </div>
  </div>
);

export default Home;
