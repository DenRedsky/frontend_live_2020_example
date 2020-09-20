import React from 'react';
import { RouterProvider, Route, Link } from 'react-router5';
import createRouter from 'router5';
import browserPlugin from 'router5-plugin-browser';
import Routes from './routes';

const PATHS = {
  HOME: { name: 'home', path: '/' },
  ABOUT: { name: 'about', path: '/about' }
};

const router = createRouter([PATHS.HOME, PATHS.ABOUT], { defaultRoute: PATHS.HOME.name });

router.usePlugin(browserPlugin());
router.start();

const App = () => (
  <RouterProvider router={ router }>
    <Link href={ PATHS.HOME.path } routeName={ PATHS.HOME.name }>
      { PATHS.HOME.name }
    </Link>
    <Link href={ PATHS.ABOUT.path } routeName={ PATHS.ABOUT.name }>
      { PATHS.ABOUT.name }
    </Link>
    <Route>{({ route }) => <Routes name={ route.name } />}</Route>
  </RouterProvider>
);

export default App;
