/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useRef } from 'react';
import Zoom from 'react-reveal/Zoom';

import Translate from '../Translate';
import TranslateDropdown from '../TranslateDropdown';
import Sections from '../Sections';

import myself from '../../assets/img/me.jpg';

import './index.css';

const SectionsHr = () => <hr className="home-hr" />;

const renderHeader = (onAboutClick, onAcademicClick, onProfessionalClick) => (
  <div className="home-menu">
    <ul>
      <li onClick={onAboutClick}>
        <Translate tKey="header.about" />
      </li>
      <li onClick={onAcademicClick}>
        <Translate tKey="header.academic" />
      </li>
      <li onClick={onProfessionalClick}>
        <Translate tKey="header.professional" />
      </li>
      <li>
        <TranslateDropdown />
      </li>
    </ul>
  </div>
);

const renderBody = (aboutRef, academicRef, professionalRef) => (
  <div className="home-body">
    <div className="home-title">
      <Translate tKey="header.title" />
    </div>
    <Zoom>
      <img alt="me" src={myself} className="home-myPicture" />
    </Zoom>
    <SectionsHr />

    <div ref={aboutRef}>
      <Sections.AboutLifeSection />
    </div>
    <SectionsHr />

    <div ref={academicRef}>
      <Sections.AcademicLifeSection />
    </div>
    <SectionsHr />

    <div ref={professionalRef}>
      <Sections.ProfessionalLifeSection />
    </div>
  </div>
);

const Home = () => {
  const scrollingBehavior = { behavior: 'smooth' };

  const aboutRef = useRef(null);
  const academicRef = useRef(null);
  const professionalRef = useRef(null);

  const onAboutClick = () => {
    aboutRef.current.scrollIntoView(scrollingBehavior);
  };
  const onAcademicClick = () => {
    academicRef.current.scrollIntoView(scrollingBehavior);
  };
  const onProfessionalClick = () => {
    professionalRef.current.scrollIntoView(scrollingBehavior);
  };

  return (
    <div className="home-container">
      {renderHeader(onAboutClick, onAcademicClick, onProfessionalClick)}
      {renderBody(aboutRef, academicRef, professionalRef)}
    </div>
  );
};

export default Home;
