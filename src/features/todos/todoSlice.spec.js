import { todoReducer, todoActions } from './index';
import { LOADING_STATUS } from '../../common/lib/api/constants';

const todoId = 1;
const mockedTodo = {
  id: todoId,
  text: 'Todo',
  completed: false,
};

describe('Todo reducer', () => {
  test('Should return the initial state', () => {
    expect(todoReducer(undefined, {})).toEqual({
      entities: {},
      loadingStatus: LOADING_STATUS.IDLE,
    });
  });
  test('Should add todo', () => {
    const text = mockedTodo.text;
    const completed = mockedTodo.completed;

    expect(todoReducer(undefined, todoActions.addTodo({ text, completed }))).toEqual({
      entities: { 0: { id: 0, text, completed } },
      loadingStatus: LOADING_STATUS.IDLE,
    });
  });
  test('Should toggle todo', () => {
    expect(
      todoReducer(
        { entities: { [todoId]: mockedTodo }, loadingStatus: LOADING_STATUS.IDLE },
        todoActions.toggleTodo(1)
      )
    ).toEqual({
      entities: { [todoId]: { ...mockedTodo, completed: true } },
      loadingStatus: LOADING_STATUS.IDLE,
    });
  });
});
