import React from 'react';
import PropTypes from 'prop-types';

import classes from './rounded-checkbox.module.css';
import useRandomId from '../../hooks/useRandomId';

const RoundedCheckbox = ({ onChange, checked, className }) => {
  const randomId = useRandomId();
  const inputId = `rounded-checkbox-${randomId}`;

  return (
    <div className={`${className} ${classes.RoundedCheckbox}`}>
      <input type="checkbox" onChange={onChange} id={inputId} checked={checked} />
      <label htmlFor={inputId} title="Mark as completed" />
    </div>
  );
};

RoundedCheckbox.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};

RoundedCheckbox.defaultProps = {
  onChange: () => {},
  checked: false,
};

export default RoundedCheckbox;
