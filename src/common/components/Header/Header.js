import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import classes from './header.module.css';
import RoundedCheckbox from '../RoundedCheckbox/RoundedCheckbox';
import { todoActions } from '../../../features/todos';
import { KEY_MAP } from '../../lib/html-helpers/keyboard';

const mockedTodo = { text: '', completed: false };

const Header = ({ className }) => {
  const [todo, setTodo] = useState(mockedTodo);
  const inputRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = e => {
    const isTodoValid = todo.text.trim().length > 0;

    if (e.charCode === KEY_MAP.ENTER && isTodoValid) {
      dispatch(todoActions.addTodo(todo));
      setTodo(mockedTodo);
    }
  };

  const handleTextChange = e => {
    setTodo(oldTodo => ({ ...oldTodo, text: e.target.value }));
  };

  const handleCompletedChange = e => {
    setTodo(oldTodo => ({ ...oldTodo, completed: e.target.checked }));
  };

  return (
    <div className={classNames(classes.Header, className)}>
      <RoundedCheckbox
        onChange={handleCompletedChange}
        checked={todo.completed}
        className={classes.RoundedCheckbox}
      />
      <input
        type="text"
        placeholder="What should be done?"
        value={todo.text}
        ref={inputRef}
        onChange={handleTextChange}
        onKeyPress={handleSubmit}
      />
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: '',
};

export default Header;
