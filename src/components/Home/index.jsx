import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

import Translate from '../Translate';
import TranslateDropdown from '../TranslateDropdown';

import myself from '../../assets/img/me.jpg';

import './index.css';

const renderMenu = () => (
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
);

const renderHeader = () => (
  <div className="home-header">
    <div className="home-menuContainer">
      {renderMenu()}
      <div className="home-selectLanguage">
        <TranslateDropdown />
      </div>
    </div>
  </div>
);

const renderBody = () => (
  <div className="home-body">
    <Slide left>
      <div className="home-title">
        <Translate tKey="header.title" />
      </div>
    </Slide>

    <Zoom>
      <img alt="me" src={myself} className="home-myPicture" />
    </Zoom>
  </div>
);

const Home = () => (
  <div className="home-container">
    {renderHeader()}
    {renderBody()}
  </div>
);

export default Home;
