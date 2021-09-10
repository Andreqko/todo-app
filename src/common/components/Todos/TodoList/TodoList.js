import React from 'react';
import { useSelector } from 'react-redux';

import classes from '../todos.module.css';
import TodoItem from '../TodoItem/TodoItem';
import TodoPlaceholder from '../TodoPlaceholder/TodoPlaceholder';
import { todoSelectors } from '../../../../features/todos';
import Footer from '../../Footer/Footer';

const TodoList = () => {
  const todos = useSelector(todoSelectors.selectTodoIds);

  if (todos.length === 0) {
    return <TodoPlaceholder />;
  }

  return (
    <div className={classes.TodoList}>
      {todos.map(todoId => (
        <TodoItem id={todoId} key={todoId} />
      ))}
      <Footer />
    </div>
  );
};

export default TodoList;
