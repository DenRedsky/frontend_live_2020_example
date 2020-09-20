import React from 'react';

const HomeBundle = React.lazy(() => import(
  /* webpackChunkName: 'home' */
  './home'
));

export default () => (
  <React.Suspense fallback={ <div>Loading...</div> }>
    <HomeBundle />
  </React.Suspense>
);
