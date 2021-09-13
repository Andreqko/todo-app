import { todoReducer, todoActions } from './index';
import { LOADING_STATUS } from '../../api/constants';
import generateRandomId from '../../common/lib/utils/generate-random-id';

const mockedTodoId = generateRandomId();
const mockedTodo = {
  id: mockedTodoId,
  text: 'Todo',
  completed: false,
  order: 1,
};
const mockedEntities = { [mockedTodoId]: mockedTodo };

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

    const { entities } = todoReducer(undefined, todoActions.addTodo({ text, completed }));
    const todo = Object.values(entities)[0];

    expect(todo.text).toEqual(text);
    expect(todo.completed).toEqual(completed);
  });
  test('Should autoincrement order for newly added todo', () => {
    const { entities } = todoReducer(
      { entities: mockedEntities },
      todoActions.addTodo({ text: 'Text' })
    );
    const todo = Object.values(entities)[1];

    expect(todo.order).toEqual(mockedTodo.order + 1);
  });
  test('Should delete todo', () => {
    const { entities } = todoReducer(
      { entities: mockedEntities },
      todoActions.deleteTodo(mockedTodoId)
    );
    const entitiesCount = Object.values(entities).length;

    expect(entitiesCount).toEqual(0);
  });
  test('Should toggle todo', () => {
    const { entities } = todoReducer(
      { entities: mockedEntities },
      todoActions.toggleTodo(mockedTodoId)
    );
    const todo = Object.values(entities)[0];

    expect(todo.completed).toEqual(!mockedTodo.completed);
  });
  test('Should clear completed todos', () => {
    const { entities } = todoReducer(
      { entities: { [mockedTodoId]: { ...mockedTodo, completed: true } } },
      todoActions.clearCompleted(mockedTodoId)
    );
    const todo = Object.values(entities)[0];

    expect(todo.completed).toEqual(false);
  });
  test('Should swap todos order', () => {
    const secondMockedTodoId = generateRandomId();
    const secondMockedTodo = {
      ...mockedTodo,
      id: secondMockedTodoId,
      order: mockedTodo.order + 1,
    };
    const { entities } = todoReducer(
      { entities: { ...mockedEntities, [secondMockedTodoId]: secondMockedTodo } },
      todoActions.swapOrder(mockedTodoId, secondMockedTodoId)
    );
    const [firstTodo, secondTodo] = Object.values(entities);

    expect(firstTodo.order).toEqual(secondMockedTodo.order);
    expect(secondTodo.order).toEqual(mockedTodo.order);
  });
});
