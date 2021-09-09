import React from 'react';

import classes from './app.module.css';
import Home from '../pages/Home/Home';

const App = () => (
  <div className={classes.App}>
    <h1>TODO</h1>
    <Home />
  </div>
);

export default App;
