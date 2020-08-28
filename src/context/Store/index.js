import React, { useReducer } from 'react';

// middleware
import { applyMiddleware, logger } from './middleware';

// reducer
import combineReducers from '../combineReducers';
import { userReducer } from './reducers';

// constants
import { DEV_MODE } from '../../constants';

const PLAIN_DATA = { data: undefined, errors: undefined, loading: false };

const INIT_STATE = {
  dataList: PLAIN_DATA
}

const allReducers = {
  users: [userReducer, INIT_STATE],
}

const Store = ({ children }) => {
  const [reducers, store] = combineReducers(allReducers);
  const [state, dispatch] = useReducer(DEV_MODE ? logger(reducers) : reducers, store);

  /**
   * Make dispatch with middleware
   */
  const dispatchAsync = applyMiddleware(dispatch);

  return (
    <StoreContext.Provider value={[state, dispatchAsync]}>
      {children}
    </StoreContext.Provider>
  );
};

export const StoreContext = React.createContext(INIT_STATE);

export default Store;
