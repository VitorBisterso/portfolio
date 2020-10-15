import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import i18n from '../../i18n';

import './index.css';

const TranslateButton = ({ language, flag }) => (
  <button
    className="translateButton"
    type="button"
    onClick={() => i18n.changeLanguage(language)}
  >
    <img width="100%" src={flag} alt={language} />
  </button>
);

TranslateButton.propTypes = {
  language: PropTypes.string.isRequired,
  flag: PropTypes.node.isRequired,
};

export default withTranslation()(TranslateButton);
