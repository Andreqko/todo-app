import React from 'react';

import classes from './todos.module.css';
import TodoInput from './TodoInput/TodoInput';
import TodoList from './TodoList/TodoList';

const Todos = () => (
  <div className={classes.Todos}>
    <TodoInput />
    <TodoList />
  </div>
);

export default Todos;
