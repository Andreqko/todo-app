import types from './types';

const actions = {
  addTodo: todoData => async dispatch => {
    const todo = await fetch('http://localhost:3001/api/todos/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todoData),
    });

    dispatch({ type: types.addTodo, payload: todo });
  },
  getTodos: todos => async dispatch => {
    const todos = await fetch('http://localhost:3001/api/todos');

    dispatch({ type: types.addTodos, payload: todos });
  },
  toggleTodo: todoId => ({
    type: types.toggleTodo,
    payload: todoId,
  }),
  deleteTodo: todoId => ({
    type: types.deleteTodo,
    payload: todoId,
  }),
  clearCompleted: () => ({
    type: types.clearCompleted,
    payload: {},
  }),
  swapOrder: (firstTodoId, secondTodoId) => ({
    type: types.swapOrder,
    payload: {
      firstTodoId,
      secondTodoId,
    },
  }),
};

export default actions;
