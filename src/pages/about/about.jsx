import React from 'react';
import random from 'lodash.random';

import styles from './styles';

const About = () => (
  <div className="block">
    Используем какую-нибудь зависимость, например
    <span className={ styles.text }> lodash.random</span>
    , эта зависимость будет только в чанке этой страницы:
    { random(10) }
  </div>
);

export default About;
