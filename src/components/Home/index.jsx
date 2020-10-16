import React, { useRef } from 'react';
import Zoom from 'react-reveal/Zoom';

import Translate from '../Translate';
import TranslateDropdown from '../TranslateDropdown';
import Sections from '../Sections';

import myself from '../../assets/img/me.jpg';

import './index.css';

const renderMenu = onAcademicClick => (
  <div className="home-menu">
    <ul>
      <li>
        <Translate tKey="header.professional" />
      </li>
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <li onClick={onAcademicClick}>
        <Translate tKey="header.academic" />
      </li>
      <li>
        <Translate tKey="header.about" />
      </li>
    </ul>
  </div>
);

const renderHeader = onAcademicClick => (
  <div className="home-header">
    <div className="home-menuContainer">
      {renderMenu(onAcademicClick)}
      <div className="home-selectLanguage">
        <TranslateDropdown />
      </div>
    </div>
  </div>
);

const renderBody = academicRef => (
  <div className="home-body">
    <div className="home-title">
      <Translate tKey="header.title" />
    </div>
    <Zoom>
      <img alt="me" src={myself} className="home-myPicture" />
    </Zoom>

    <hr className="home-hr" />

    <div ref={academicRef}>
      <Sections.AcademicLifeSection />
    </div>
  </div>
);

const Home = () => {
  const academicRef = useRef(null);
  const scrollingBehavior = { behavior: 'smooth' };
  const onAcademicClick = () => {
    academicRef.current.scrollIntoView(scrollingBehavior);
  };

  return (
    <div className="home-container">
      {renderHeader(onAcademicClick)}
      {renderBody(academicRef)}
    </div>
  );
};

export default Home;
