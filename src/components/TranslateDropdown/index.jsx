import React from 'react';
import { withTranslation } from 'react-i18next';

import i18n, { allLanguagesObject } from '../../i18n';

import './index.css';

const TranslateDropdown = () => {
  return (
    <select
      className="container"
      onChange={e => i18n.changeLanguage(e.target.value)}
    >
      {allLanguagesObject.map(language => (
        <option key={language.value} value={language.value}>
          {language.label}
        </option>
      ))}
    </select>
  );
};

export default withTranslation()(TranslateDropdown);
