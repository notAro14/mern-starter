import React, { Suspense, lazy } from 'react';
// router
import { Router } from '@reach/router';
// components
import { Navbar } from './components/Navbar';
import { Loading } from './components/Loading';

const HomePage = lazy(() => import('./views/HomePage'));
const InstallationPage = lazy(() => import('./views/InstallationPage'));

export default () => {
  return (
    <div id="app">
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Router>
          <HomePage path="/" />
          <InstallationPage path="/installation" />
        </Router>
      </Suspense>
    </div>
  );
};
