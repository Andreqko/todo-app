import { LOCAL_STORAGE_KEYS } from '../../api/constants';

const localStorageExists = () => {
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
