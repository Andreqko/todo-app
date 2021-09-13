import React from 'react';
import PropTypes from 'prop-types';

import classes from './footer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { todoActions, todoSelectors } from '../../../features/todos';
import { FILTER_STATUSES } from '../../redux/constants';
import { filtersActions } from '../../../features/filters';

const Footer = props => {
  const dispatch = useDispatch();
  const todos = useSelector(todoSelectors.selectTodoIds);
  const handleClearCompletedTodos = () => dispatch(todoActions.clearCompleted());
  const handleStatusFilterChange = status => dispatch(filtersActions.setStatusFilter(status));

  if (todos.length === 0) return null;

  return (
    <div className={classes.Footer}>
      <div>Items left</div>
      <ul className={classes.FiltersList}>
        {Object.values(FILTER_STATUSES).map(status => (
          <li className={classes.FiltersListItem}>
            <button
              className={classes.FilterButton}
              onClick={() => handleStatusFilterChange(status)}
            >
              {status}
            </button>
          </li>
        ))}
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
