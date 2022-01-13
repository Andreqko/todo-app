import { TODO_STATUSES } from '../../common/redux/constants';

export const getNextOrderNumber = todos =>
  todos.reduce((maxOrder, { order }) => Math.max(order, maxOrder), 0) + 1;

export const TODO_STATUSES_TOGGLING_MAP = {
  [TODO_STATUSES.COMPLETED]: TODO_STATUSES.ACTIVE,
  [TODO_STATUSES.ACTIVE]: TODO_STATUSES.COMPLETED,
};
