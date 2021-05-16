import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// components
import Home from './containers/Home';
import About from './containers/About';

export default function App() {
  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
      </Switch>
    </Router>
  );
}
