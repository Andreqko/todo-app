import types from './types';

const actions = {
  addTodo: ({ text, completed }) => ({
    type: types.addTodo,
    payload: {
      text,
      completed,
    },
  }),
  toggleTodo: todoId => ({
    type: types.toggleTodo,
    payload: todoId,
  }),
  clearCompleted: () => ({
    type: types.clearCompleted,
    payload: {},
  }),
};

export default actions;
