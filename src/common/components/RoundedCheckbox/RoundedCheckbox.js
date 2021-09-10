import React from 'react';
import PropTypes from 'prop-types';

import classes from './rounded-checkbox.module.css';

const RoundedCheckbox = ({ onChange, checked }) => (
  <div className={classes.RoundedCheckbox}>
    <input type="checkbox" onChange={onChange} id="rounded-checkbox" checked={checked} />
    <label htmlFor="rounded-checkbox" />
  </div>
);

RoundedCheckbox.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};

RoundedCheckbox.defaultProps = {
  onChange: () => {},
  checked: false,
};

export default RoundedCheckbox;
