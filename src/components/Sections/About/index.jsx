import React from 'react';

import LifeSection from '../../LifeSection';

import family from '../../../assets/img/family.jpg';
import teemo from '../../../assets/img/teemo.png';

import './index.css';

const AboutSection = () => (
  <>
    <LifeSection
      titleKey="header.about"
      textKey="about.family"
      appearanceSide="left"
      size={0.9}
      image={family}
      imageClassName="aboutSection-family"
    />
    <div className="lifeSection-space">
      <LifeSection
        hasTitle={false}
        textKey="about.uselessInfo"
        appearanceSide="right"
        size={0.9}
        image={teemo}
        imageClassName="aboutSection-teemo"
      />
    </div>
  </>
);

export default AboutSection;
