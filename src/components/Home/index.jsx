/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useRef } from 'react';
import Zoom from 'react-reveal/Zoom';

import Translate from '../Translate';
import TranslateDropdown from '../TranslateDropdown';
import Sections from '../Sections';
import ContactButton from '../ContactButton';

import myself from '../../assets/img/me.jpg';
import github from '../../assets/img/github.png';
import linkedin from '../../assets/img/linkedin.png';

import './index.css';

const SectionsHr = () => <hr className="home-hr" />;

const renderHeader = (
  onAboutClick,
  onAcademicClick,
  onProfessionalClick,
  onContactClick
) => (
  <div className="home-menu">
    <ul>
      <li>
        <button type="button" onClick={onAboutClick}>
          <Translate tKey="header.about" />
        </button>
      </li>
      <li>
        <button type="button" onClick={onAcademicClick}>
          <Translate tKey="header.academic" />
        </button>
      </li>
      <li>
        <button type="button" onClick={onProfessionalClick}>
          <Translate tKey="header.professional" />
        </button>
      </li>
      <li>
        <button type="button" onClick={onContactClick}>
          <Translate tKey="header.contact" />
        </button>
      </li>
      <li className="home-selectLanguage">
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

const renderFooter = contactRef => (
  <div ref={contactRef} className="home-footer">
    <ContactButton image={github} link="https://github.com/VitorBisterso" />
    <div>
      <ContactButton
        image={linkedin}
        link="https://www.linkedin.com/in/vitor-bisterso-dos-santos-18a574173/"
      />
    </div>
  </div>
);

const Home = () => {
  const scrollingBehavior = { behavior: 'smooth' };

  const aboutRef = useRef(null);
  const academicRef = useRef(null);
  const professionalRef = useRef(null);
  const contactRef = useRef(null);

  const onAboutClick = () => {
    aboutRef.current.scrollIntoView(scrollingBehavior);
  };
  const onAcademicClick = () => {
    academicRef.current.scrollIntoView(scrollingBehavior);
  };
  const onProfessionalClick = () => {
    professionalRef.current.scrollIntoView(scrollingBehavior);
  };
  const onContactClick = () => {
    contactRef.current.scrollIntoView(scrollingBehavior);
  };

  return (
    <div className="home-container">
      {renderHeader(
        onAboutClick,
        onAcademicClick,
        onProfessionalClick,
        onContactClick
      )}
      {renderBody(aboutRef, academicRef, professionalRef)}
      {renderFooter(contactRef)}
    </div>
  );
};

export default Home;
