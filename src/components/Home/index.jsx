import React from 'react';
import Zoom from 'react-reveal/Zoom';

import Translate from '../Translate';
import TranslateDropdown from '../TranslateDropdown';
import TextBox from '../TextBox';

import cotuca from '../../assets/img/cotuca.png';
import myself from '../../assets/img/me.jpg';

import './index.css';

const renderMenu = () => (
  <div className="home-menu">
    <ul>
      <li>
        <Translate tKey="header.professional" />
      </li>
      <li>
        <Translate tKey="header.academic" />
      </li>
      <li>
        <Translate tKey="header.about" />
      </li>
    </ul>
  </div>
);

const renderHeader = () => (
  <div className="home-header">
    <div className="home-menuContainer">
      {renderMenu()}
      <div className="home-selectLanguage">
        <TranslateDropdown />
      </div>
    </div>
  </div>
);

const renderBody = () => (
  <div className="home-body">
    <div className="home-title">
      <Translate tKey="header.title" />
    </div>
    <Zoom>
      <img alt="me" src={myself} className="home-myPicture" />
    </Zoom>

    <hr className="home-hr" />

    <div className="home-lifeSection">
      <p className="home-lifeSectionTitle">
        <Translate tKey="header.academic" />
      </p>
      <div className="home-lifeSectionBody">
        <TextBox
          text="Em 2016, entrei no Colégio Técnico de Campinas (COTUCA)
          e comecei o curso de informática. Depois de 3 anos de muitos
          estudos aprendendo sobre o mundo de TI, me formei como técnico
          em informática."
          appearanceSide="left"
          size={0.9}
        />
        <Zoom>
          <img className="home-cotuca" alt="cotuca" src={cotuca} />
        </Zoom>
      </div>
    </div>
  </div>
);

const Home = () => (
  <div className="home-container">
    {renderHeader()}
    {renderBody()}
  </div>
);

export default Home;
