import { LOADING_STATUS } from '../../common/lib/api/constants';
import types from './types';

const initialState = {
  loadingStatus: LOADING_STATUS.IDLE,
  entities: {},
};

const nextTodoId = todos => todos.reduce((maxId, id) => Math.max(id, maxId), -1) + 1;

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case types.addTodo: {
      const todo = action.payload;
      const todoId = nextTodoId(Object.keys(state.entities));

      return {
        ...state,
        entities: {
          ...state.entities,
          [todoId]: {
            id: todoId,
            text: todo.text,
            completed: todo.completed ?? false,
          },
        },
      };
    }
    default: {
      return state;
    }
  }
}
