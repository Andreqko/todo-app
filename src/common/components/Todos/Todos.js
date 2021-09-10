import React from 'react';
import { useSelector } from 'react-redux';

import classes from './todos.module.css';
import TodoItem from './TodoItem/TodoItem';
import { todoSelectors } from '../../../features/todos';
import TodoInput from './TodoInput/TodoInput';

const Todos = () => {
  const todos = useSelector(todoSelectors.selectTodoIds);
  const completedTodosCount = todos.reduce(
    (count, todo) => (todo.completed ? count + 1 : count),
    0
  );
  const uncompletedTodosCount = todos.length - completedTodosCount;

  return (
    <div className="Todos">
      <TodoInput />
      <div className={classes.TodoStats}>
        <div>
          Completed: {completedTodosCount}/{uncompletedTodosCount}
        </div>
      </div>
      <div className={classes.TodoList}>
        {todos.map(todoId => (
          <TodoItem id={todoId} key={todoId} />
        ))}
      </div>
    </div>
  );
};

export default Todos;
