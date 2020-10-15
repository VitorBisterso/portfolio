import i18next from 'i18next';

const Translate = ({ tKey }) => {
  return i18next.t(tKey);
};

export default Translate;
