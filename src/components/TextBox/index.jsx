import React from 'react';
import PropTypes from 'prop-types';
import Slide from 'react-reveal/Slide';

import './index.css';

const TextBox = ({ text, appearanceSide, size }) => (
  <Slide left={appearanceSide === 'left'} right={appearanceSide === 'right'}>
    <div className="textBox-container" style={{ flex: size }}>
      <p>{text}</p>
    </div>
  </Slide>
);

TextBox.propTypes = {
  text: PropTypes.string.isRequired,
  appearanceSide: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default TextBox;
