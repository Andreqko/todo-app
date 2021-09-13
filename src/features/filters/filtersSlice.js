import types from './types';
import { FILTER_STATUSES } from '../../common/redux/constants';

const initialState = {
  status: FILTER_STATUSES.ALL,
};

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case types.setStatusFilter: {
      return {
        ...state,
        status: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
