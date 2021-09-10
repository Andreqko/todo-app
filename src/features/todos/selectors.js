import { createSelector } from 'reselect';
// stored as separated const, because can't use this.selectTodoEntities inside createSelector
const selectTodoEntities = state => state.todos.entities;

const todoSelectors = {
  selectTodoEntities,
  selectTodos: createSelector(selectTodoEntities, entities => Object.values(entities)),
  selectTodoIds: createSelector(selectTodoEntities, entities => Object.keys(entities)),
  selectTodoById: (state, todoId) => selectTodoEntities(state)[todoId],
};

export default todoSelectors;
