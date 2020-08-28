import { useState } from 'react';

function compose(...fns) {
  if (fns.length === 0) return arg => arg
  if (fns.length === 1) return fns[0];
  return fns.reduce((a, b) => (...args) => {
    return a(b(...args))
  })
}

function useEnhancedReducer(reducer, initState, middlewares = []) {
  const stateHook = useState(initState);

  let state = stateHook[0];
  const setState = stateHook[1];

  const dispatch = action => {
    state = reducer(state, action);
    setState(state);

    return action;
  };

  let enhancedDispatch;

  const store = {
    getState: () => state,
    dispatch: (...arg) => enhancedDispatch(...arg),
  }

  const chain = middlewares.map(middleware => middleware(store));
  enhancedDispatch = compose(...chain)(dispatch)

  return [state, enhancedDispatch];
};

export default useEnhancedReducer;
