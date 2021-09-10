import React from 'react';
import PropTypes from 'prop-types';

import classes from './footer.module.css';
import { useDispatch } from 'react-redux';
import { todoActions } from '../../../features/todos';

const Footer = props => {
  const dispatch = useDispatch();

  const handleClearCompletedTodos = () => dispatch(todoActions.clearCompleted());

  return (
    <div className={classes.Footer}>
      <div className={classes.RemainingTodos}>Items left</div>
      <ul className={classes.FiltersList}>
        <li className={classes.FiltersListItem}>
          <button className={classes.FilterButton}>All</button>
        </li>
        <li className={classes.FiltersListItem}>
          <button className={classes.FilterButton}>Active</button>
        </li>
        <li className={classes.FiltersListItem}>
          <button className={classes.FilterButton}>Completed</button>
        </li>
      </ul>
      <button className={classes.FilterButton} onClick={handleClearCompletedTodos}>
        Clear completed
      </button>
    </div>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
