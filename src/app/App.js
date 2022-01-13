import React from 'react';

import classes from './app.module.css';
import Header from '../common/components/Header/Header';
import TodoList from '../common/components/TodoList/TodoList';
import Footer from '../common/components/Footer/Footer';

const App = () => (
  <div className={classes.App}>
    <h1 className={classes.AppTitle}>Todo</h1>
    <Header />
    <TodoList />
    <Footer />
  </div>
);

export default App;
