// reducer
import blankReducer from './blankReducer';

// action
import { PREFIXES } from '../types';

export default (state, action) => {

  if (action.type.startsWith(PREFIXES.USER)) {
    return blankReducer(state, action);
  }

  return state;
};
