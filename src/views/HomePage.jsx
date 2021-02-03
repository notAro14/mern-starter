import React from 'react';
import { ExternalLink } from '../components/Link/Link';

const HomePage = () => (
  <div>
    <h1>Webpack config for React</h1>
    <p>
      Boostrap your React project with this Boilerplate. It uses React 17 and
      Webpack 5.
    </p>
    <p>
      This is heavily inspired by Tania Rascia&apos;s{' '}
      <ExternalLink href="https://github.com/taniarascia/webpack-boilerplate">
        boilerplate
      </ExternalLink>
      .
    </p>
  </div>
);

export default HomePage;
