import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoActions } from '../../../../features/todos';
import RoundedCheckbox from '../../RoundedCheckbox/RoundedCheckbox';

import classes from '../todos.module.css';
import { KEY_MAP } from '../../../lib/html-helpers/keyboard';

const mockedTodo = { text: '', completed: false };

const TodoInput = () => {
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
    <div className={classes.TodoInput}>
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

export default TodoInput;
