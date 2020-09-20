import React from 'react';
import random from 'lodash.random';

const About = () => (
  <div className="block">
    Какой-нибудь текст для этой страницы и тут специально используем какую-нибудь зависимость, например lodash.random:
    { random(10) }
  </div>
);

export default About;
