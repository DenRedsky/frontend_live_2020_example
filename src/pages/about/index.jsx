import React from 'react';

const AboutBundle = React.lazy(() => import(
  /* webpackChunkName: 'about' */
  './about'
));

export default () => (
  <React.Suspense fallback={ <div>Loading...</div> }>
    <AboutBundle />
  </React.Suspense>
);
