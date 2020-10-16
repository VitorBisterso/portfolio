import React from 'react';

import LifeSection from '../../LifeSection';

import dextra from '../../../assets/img/dextra.png';
import reactImg from '../../../assets/img/react.png';

import './index.css';

const ProfessionalSection = () => (
  <>
    <LifeSection
      titleKey="header.professional"
      textKey="professional.dextra"
      appearanceSide="left"
      size={0.9}
      image={dextra}
      imageClassName="professionalSection-dextra"
    />
    <div className="lifeSection-space">
      <LifeSection
        hasTitle={false}
        textKey="professional.skills"
        appearanceSide="right"
        size={0.9}
        image={reactImg}
        imageClassName="professionalSection-react"
      />
    </div>
  </>
);

export default ProfessionalSection;
