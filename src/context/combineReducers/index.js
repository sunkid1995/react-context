

export default function combineReducers(reducers) {
  if (!reducers) {
    throw new Error('The function combineReducers for hooks can a reducers.');
  }

  const reducersKeys = Object.keys(reducers);
  const reducersValues = Object.values(reducers);

  /**
   * Get state from reducersValues
   */
  let globalState;
  reducersKeys.forEach((key, index) => {
    globalState = { ...globalState, [key]: reducersValues[index][1] }
  });

  /**
   * Get reducer from reducersKeys
   */
  let allReducers;
  reducersValues.forEach((value, index) => {
    allReducers = { ...allReducers, [reducersKeys[index]]: value[0] }
  });

  const dispatch = (state, action) => {
    let stateChanged = false;
    let newState = {};
    let nextState = {};

    for (let i = 0; i < reducersKeys.length; i++) {
      const currentKey = reducersKeys[i];
      const currentReducer = allReducers[currentKey];

      /**
       * Make next and prev state›
       */
      const prevState = state[currentKey];
      nextState = currentReducer(prevState, action);

      stateChanged = stateChanged || nextState !== prevState;
      newState[currentKey] = nextState;

      return stateChanged ? newState : state;
    }
  };

  return [globalState, dispatch]
}
