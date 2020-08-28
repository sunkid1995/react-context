import React from 'react';

// middleware
import { promiseMiddleware, logger } from './middleware';

// reducer
import combineReducers from '../combineReducers';
import { userReducer } from './reducers';

// hooks
import useEnhancedReducer from '../../hooks/useEnhancedReducer'

// constants
import { DEV_MODE } from '../../constants';

const PLAIN_DATA = { data: undefined, errors: undefined, loading: false };

const INIT_STATE = {
  dataList: PLAIN_DATA
}

const allMiddlewares = [
  promiseMiddleware,
  ...(DEV_MODE ? [logger] : [])
]

const allReducers = {
  users: [userReducer, INIT_STATE],
}

const Store = ({ children }) => {
  const [store, reducers] = combineReducers(allReducers);
  const [state, dispatch] = useEnhancedReducer(reducers, store, allMiddlewares);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

export const StoreContext = React.createContext(INIT_STATE);

export default Store;
