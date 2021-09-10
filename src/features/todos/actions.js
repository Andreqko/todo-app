import types from './types';

const actions = {
  addTodo: ({ text, completed }) => {
    return {
      type: types.addTodo,
      payload: {
        text,
        completed,
      },
    };
  },
};

export default actions;
