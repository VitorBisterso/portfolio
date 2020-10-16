import React from 'react';
import PropTypes from 'prop-types';
import Zoom from 'react-reveal/Zoom';

import Translate from '../Translate';
import TextBox from '../TextBox';

import './index.css';

const renderLifeSectionBody = (
  titleKey,
  textKey,
  appearanceSide,
  size,
  image,
  imageClassName
) =>
  appearanceSide === 'left' ? (
    <div className="lifeSection-body">
      <TextBox textKey={textKey} appearanceSide={appearanceSide} size={size} />
      <Zoom>
        <img
          className={imageClassName}
          alt={`${titleKey}-${textKey}`}
          src={image}
        />
      </Zoom>
    </div>
  ) : (
    <div className="lifeSection-body">
      <Zoom>
        <img
          className={imageClassName}
          alt={`${titleKey}-${textKey}`}
          src={image}
        />
      </Zoom>
      <TextBox textKey={textKey} appearanceSide={appearanceSide} size={size} />
    </div>
  );

const LifeSection = ({
  titleKey,
  textKey,
  appearanceSide,
  size,
  image,
  imageClassName,
}) => (
  <div className="lifeSection-container">
    <p className="lifeSection-title">
      <Translate tKey={titleKey} />
    </p>
    {renderLifeSectionBody(
      titleKey,
      textKey,
      appearanceSide,
      size,
      image,
      imageClassName
    )}
  </div>
);

LifeSection.propTypes = {
  titleKey: PropTypes.string.isRequired,
  textKey: PropTypes.string.isRequired,
  appearanceSide: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  image: PropTypes.node.isRequired,
  imageClassName: PropTypes.string.isRequired,
};

export default LifeSection;
