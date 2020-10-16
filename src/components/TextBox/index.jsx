import React from 'react';
import PropTypes from 'prop-types';
import Slide from 'react-reveal/Slide';

import Translate from '../Translate';

import './index.css';

const TextBox = ({ textKey, appearanceSide, size }) => (
  <Slide left={appearanceSide === 'left'} right={appearanceSide === 'right'}>
    <div className="textBox-container" style={{ flex: size }}>
      <Translate tKey={textKey} />
    </div>
  </Slide>
);

TextBox.propTypes = {
  textKey: PropTypes.string.isRequired,
  appearanceSide: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default TextBox;
