import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Translate = ({ tKey }) => {
  const { t } = useTranslation();

  return <p>{t(tKey)}</p>;
};

Translate.propTypes = {
  tKey: PropTypes.string.isRequired,
};

export default Translate;
