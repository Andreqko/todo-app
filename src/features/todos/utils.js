import { LOCAL_STORAGE_KEYS } from '../../api/constants';
import { TODO_STATUSES } from '../../common/redux/constants';

const localStorageExists = () => {
  // wrap check in try/catch, since there is no window when tests are running
  try {
    return 'localStorage' in window;
  } catch (e) {
    return false;
  }
};

export const getTodosFromLocalStorage = () => {
  if (!localStorageExists()) return {};

  const todos = localStorage.getItem(LOCAL_STORAGE_KEYS.TODOS);

  return todos ? JSON.parse(todos) : {};
};

export const saveTodosInLocalStorage = todos => {
  if (!localStorageExists()) return;

  localStorage.setItem(LOCAL_STORAGE_KEYS.TODOS, JSON.stringify(todos));
};

export const getNextOrderNumber = todos =>
  todos.reduce((maxOrder, { order }) => Math.max(order, maxOrder), 0) + 1;

export const TODO_STATUSES_TOGGLING_MAP = {
  [TODO_STATUSES.COMPLETED]: TODO_STATUSES.ACTIVE,
  [TODO_STATUSES.ACTIVE]: TODO_STATUSES.COMPLETED,
};
