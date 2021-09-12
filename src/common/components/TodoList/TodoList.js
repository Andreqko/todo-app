import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classes from './todo-list.module.css';
import TodoItem from './TodoItem/TodoItem';
import { todoActions, todoSelectors } from '../../../features/todos';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(todoSelectors.selectTodoIds);

  const handleCheckTodo = useCallback(
    todoId => e => dispatch(todoActions.toggleTodo(todoId)),
    [dispatch]
  );

  const handleDeleteTodo = useCallback(
    todoId => e => {
      e.stopPropagation();
      dispatch(todoActions.deleteTodo(todoId));
    },
    [dispatch]
  );

  if (todos.length === 0) {
    return <p className={classes.TodoPlaceholder}>You don't have any todos left...</p>;
  }

  return (
    <div className={classes.TodoList}>
      {todos.map(todoId => (
        <TodoItem
          id={todoId}
          key={todoId}
          className={classes.TodoItem}
          onCheck={handleCheckTodo(todoId)}
          onDelete={handleDeleteTodo(todoId)}
        />
      ))}
    </div>
  );
};

export default TodoList;
