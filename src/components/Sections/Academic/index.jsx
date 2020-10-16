import React from 'react';

import LifeSection from '../../LifeSection';

import cotuca from '../../../assets/img/cotuca.png';
import ifsp from '../../../assets/img/ifsp.png';

import './index.css';

const AcademicSection = () => (
  <>
    <LifeSection
      titleKey="header.academic"
      textKey="academic.cotuca"
      appearanceSide="left"
      size={0.9}
      image={cotuca}
      imageClassName="academicSection-cotuca"
    />
    <div className="lifeSection-space">
      <LifeSection
        hasTitle={false}
        textKey="academic.ifsp"
        appearanceSide="right"
        size={1}
        image={ifsp}
        imageClassName="academicSection-ifspImage"
      />
    </div>
  </>
);

export default AcademicSection;
