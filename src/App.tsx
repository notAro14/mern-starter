import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <h1>Hello world</h1>
        </Route>
      </Switch>
    </Router>
  );
}
