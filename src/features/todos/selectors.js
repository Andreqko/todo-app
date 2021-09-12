import { createSelector } from 'reselect';
// stored as separated const, because can't use this.selectTodoEntities inside createSelector
const selectTodoEntities = state => state.todos.entities;
const selectTodos = createSelector(selectTodoEntities, entities => Object.values(entities));

const todoSelectors = {
  selectTodoEntities,
  selectTodos,
  selectSortedTodos: createSelector(selectTodos, todos =>
    [...todos].sort((a, b) => (a.order > b.order ? 1 : -1))
  ),
  selectTodoIds: createSelector(selectTodoEntities, entities => Object.keys(entities)),
  selectTodoById: (state, todoId) => selectTodoEntities(state)[todoId],
};

export default todoSelectors;
