import React from 'react';

import Translate from '../Translate';
import TranslateDropdown from '../TranslateDropdown';

import myself from '../../assets/img/me.jpg';

import './index.css';

const Home = () => (
  <div className="home-container">
    <div className="home-header">
      <div className="home-menuContainer">
        <div className="home-menu">
          <ul>
            <li>
              <Translate tKey="header.professional" />
            </li>
            <li>
              <Translate tKey="header.academic" />
            </li>
            <li>
              <Translate tKey="header.about" />
            </li>
          </ul>
        </div>

        <div className="home-selectLanguage">
          <TranslateDropdown />
        </div>
      </div>
    </div>

    <div className="home-body">
      <div className="home-title">
        <Translate tKey="header.title" />
      </div>

      <img alt="me" src={myself} className="home-myPicture" />
    </div>
  </div>
);

export default Home;
