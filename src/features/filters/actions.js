import types from './types';

const actions = {
  setStatusFilter: newFilter => ({
    type: types.setStatusFilter,
    payload: newFilter,
  }),
};

export default actions;
