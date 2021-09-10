import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import classes from '../todos.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { todoActions, todoSelectors } from '../../../../features/todos';
import RoundedCheckbox from '../../RoundedCheckbox/RoundedCheckbox';

const TodoItem = ({ id }) => {
  const dispatch = useDispatch();
  const todo = useSelector(state => todoSelectors.selectTodoById(state, id)) ?? {};

  const handleCheck = useCallback(() => {
    dispatch(todoActions.toggleTodo(id));
  }, [dispatch, id]);

  if (!todo) return null;

  const { text, completed } = todo;
  // TODO: add on click on a whole container
  return (
    <div className={`${classes.TodoItem} ${completed ? classes.Completed : ''}`}>
      <RoundedCheckbox
        className={classes.RoundedCheckbox}
        checked={completed}
        onChange={handleCheck}
      />
      {text}
    </div>
  );
};

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
};

export default TodoItem;
