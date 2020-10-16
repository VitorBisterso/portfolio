import React from 'react';
import Zoom from 'react-reveal/Zoom';

import Translate from '../Translate';
import TranslateDropdown from '../TranslateDropdown';
import LifeSection from '../LifeSection';

import cotuca from '../../assets/img/cotuca.png';
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
    <div className="home-title">
      <Translate tKey="header.title" />
    </div>
    <Zoom>
      <img alt="me" src={myself} className="home-myPicture" />
    </Zoom>

    <hr className="home-hr" />

    <LifeSection
      titleKey="header.academic"
      textKey="academic.cotuca"
      appearanceSide="left"
      size={0.9}
      image={cotuca}
      imageClassName="home-cotuca"
    />
  </div>
);

const Home = () => (
  <div className="home-container">
    {renderHeader()}
    {renderBody()}
  </div>
);

export default Home;
