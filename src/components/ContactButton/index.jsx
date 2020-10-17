import React from 'react';
import PropTypes from 'prop-types';

const ContactButton = ({ image, link }) => (
  <a href={link}>
    <img alt="contactButton-img" src={image} />
  </a>
);

ContactButton.propTypes = {
  image: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
};

export default ContactButton;
