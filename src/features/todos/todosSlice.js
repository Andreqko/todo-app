import { LOADING_STATUS, LOCAL_STORAGE_KEYS } from '../../common/lib/api/constants';
import types from './types';
import { getTodosFromLocalStorage, saveTodosInLocalStorage } from './utils';

const initialState = {
  loadingStatus: LOADING_STATUS.IDLE,
  entities: getTodosFromLocalStorage(),
};

const nextTodoId = todos => todos.reduce((maxId, id) => Math.max(id, maxId), -1) + 1;

export default function todosReducer(state = initialState, action) {
  const { entities } = state;

  switch (action.type) {
    case types.addTodo: {
      const todo = action.payload;
      const todoId = nextTodoId(Object.keys(entities));
      const updatedEntities = {
        ...entities,
        [todoId]: {
          id: todoId,
          text: todo.text,
          completed: todo.completed ?? false,
        },
      };

      saveTodosInLocalStorage(updatedEntities);

      return {
        ...state,
        entities: updatedEntities,
      };
    }
    case types.toggleTodo: {
      const todoId = action.payload;
      const todo = entities[todoId];
      const updatedEntities = {
        ...entities,
        [todoId]: { ...todo, completed: !todo.completed },
      };

      saveTodosInLocalStorage(updatedEntities);

      return {
        ...state,
        entities: updatedEntities,
      };
    }
    case types.clearCompleted: {
      const updatedEntities = Object.entries(entities).reduce((acc, [id, todo]) => {
        acc[id] = { ...todo, completed: false };

        return acc;
      }, {});

      saveTodosInLocalStorage(updatedEntities);

      return {
        ...state,
        entities: updatedEntities,
      };
    }
    default: {
      return state;
    }
  }
}
