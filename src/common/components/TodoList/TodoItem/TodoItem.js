import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import classes from './todo-item.module.css';
import { todoSelectors } from '../../../../features/todos';
import RoundedCheckbox from '../../RoundedCheckbox/RoundedCheckbox';

const TodoItem = ({ id, onCheck, onDelete, className }) => {
  const todo = useSelector(state => todoSelectors.selectTodoById(state, id)) ?? {};

  if (!todo) return null;

  const { text, completed } = todo;

  return (
    <div
      className={classNames(classes.TodoItem, className, { [classes.Completed]: completed })}
      onClick={onCheck}
    >
      <div className={classes.RightBlock}>
        <RoundedCheckbox className={classes.RoundedCheckbox} checked={completed} disabled />
        <span className={classes.TodoItemText}>{text}</span>
      </div>
      <button className={classes.TodoDeleteButton} onClick={onDelete} title="Delete todo">
        &#10005;
      </button>
    </div>
  );
};

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  onCheck: PropTypes.func,
};

TodoItem.defaultProps = {
  onCheck: () => {},
};

export default TodoItem;
