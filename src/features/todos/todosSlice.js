import { LOADING_STATUS } from '../../api/constants';
import types from './types';
import { getTodosFromLocalStorage, saveTodosInLocalStorage } from './utils';
import generateRandomId from '../../common/lib/utils/generate-random-id';

const initialState = {
  loadingStatus: LOADING_STATUS.IDLE,
  entities: getTodosFromLocalStorage(),
};

const getNextOrderNumber = todos =>
  todos.reduce((maxOrder, { order }) => Math.max(order, maxOrder), 0) + 1;

export default function todosReducer(state = initialState, action) {
  const { entities } = state;

  switch (action.type) {
    case types.addTodo: {
      const todo = action.payload;
      const todoId = generateRandomId();
      const todos = Object.values(entities);
      const order = getNextOrderNumber(todos);

      const updatedEntities = {
        ...entities,
        [todoId]: {
          id: todoId,
          text: todo.text,
          completed: todo.completed ?? false,
          order,
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
    case types.deleteTodo: {
      const todoId = action.payload;
      const updatedEntities = { ...entities };

      delete updatedEntities[todoId];

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
    case types.swapOrder: {
      const { firstTodoId, secondTodoId } = action.payload;
      const firstTodo = entities[firstTodoId];
      const secondTodo = entities[secondTodoId];
      const updatedEntities = { ...entities };

      updatedEntities[firstTodo.id] = { ...firstTodo, order: secondTodo.order };
      updatedEntities[secondTodo.id] = { ...secondTodo, order: firstTodo.order };

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
