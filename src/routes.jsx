import React from 'react';
import PropTypes from 'prop-types';

import Home from './pages/home';
import About from './pages/about';

const Routes = ({ name }) => {
  if (name === 'home') {
    return <Home />;
  }

  if (name === 'about') {
    return <About />;
  }

  return null;
};

Routes.propTypes = {
  name: PropTypes.string.isRequired
};

export default Routes;
