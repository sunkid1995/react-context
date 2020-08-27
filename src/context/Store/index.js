import React, { useReducer } from 'react';

// reducer
import combineReducers from '../combineReducers';
import { userReducer } from './reducers';

const PLAIN_DATA = { data: [], error: undefined, loading: false };

const INIT_STATE = {
  dataList: PLAIN_DATA
}

const allReducers = {
  users: [userReducer, INIT_STATE],
}

const Store = ({ children }) => {
  const [reducers, store] = combineReducers(allReducers);
  const [state, dispatch] = useReducer(reducers, store);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>  
  );
};

export const StoreContext = React.createContext(INIT_STATE);

export default Store;
