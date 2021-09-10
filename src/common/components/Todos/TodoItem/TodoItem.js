import React from 'react';
import PropTypes from 'prop-types';

import classes from '../todos.module.css';
import { useSelector } from 'react-redux';
import { todoSelectors } from '../../../../features/todos';

const TodoItem = ({ id }) => {
  const todo = useSelector(state => todoSelectors.selectTodoById(state, id));

  if (!todo) return null;

  return <div className={classes.TodoItem}>{todo.text}</div>;
};

TodoItem.propTypes = {
  id: PropTypes.string,
};

TodoItem.defaultProps = {
  id: null,
};

export default TodoItem;
