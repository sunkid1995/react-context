/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from 'react';

// middleware
import { promiseMiddleware, logger } from './middleware';

// reducer
import combineReducers from '../combineReducers';
import { userReducer } from './reducers';

// hooks
import useEnhancedReducer from '../../hooks/useEnhancedReducer';

// helper
import { mapStateToProps, mapDispatchToProps } from '../helper';

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

export const StoreContext = React.createContext({});

export const useConnect = (sToProps, dToProps) => {
  return WrappedComponent => props => {
    const [state, dispatch] = useContext(StoreContext);

    const composeProps = {
      ...props,
      ...mapStateToProps(sToProps, state),
      ...mapDispatchToProps(dToProps, dispatch),
    }

    return (
      <WrappedComponent
        {...composeProps}
      />
    )
  }
};

export default Store;
