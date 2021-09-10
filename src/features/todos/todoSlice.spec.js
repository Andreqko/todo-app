import { todoReducer, todoActions } from './index';
import { LOADING_STATUS } from '../../common/lib/api/constants';

describe('Todo reducer', () => {
  test('Should return the initial state', () => {
    expect(todoReducer(undefined, {})).toEqual({
      entities: {},
      loadingStatus: LOADING_STATUS.IDLE,
    });
  });
  test('Should add todo', () => {
    const text = 'Todo';
    const completed = false;

    expect(todoReducer(undefined, todoActions.addTodo({ text, completed }))).toEqual({
      entities: { 0: { id: 0, text, completed } },
      loadingStatus: LOADING_STATUS.IDLE,
    });
  });
});
