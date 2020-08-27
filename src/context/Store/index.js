import React, { useReducer } from 'react';

// middleware
import { applyMiddleware } from './middleware';

// reducer
import combineReducers from '../combineReducers';
import { userReducer } from './reducers';

const PLAIN_DATA = { data: undefined, errors: undefined, loading: false };

const INIT_STATE = {
  dataList: PLAIN_DATA
}

const allReducers = {
  users: [userReducer, INIT_STATE],
}

const Store = ({ children }) => {
  const [reducers, store] = combineReducers(allReducers);
  const [state, dispatch] = useReducer(reducers, store);

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
