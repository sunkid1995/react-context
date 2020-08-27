import React, { useReducer } from 'react';

// reducer
import reducer from './reducer';

const PLAIN_DATA = { data: [], error: undefined, loading: false };

const INIT_STATE = {
  dataList: PLAIN_DATA
}

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>  
  );
};

export const StoreContext = React.createContext(INIT_STATE);

export default Store;
