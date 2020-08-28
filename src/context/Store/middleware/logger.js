export default function logger(reducer) {
  const callbackLogger = (state, action) => {
    const next = reducer(state, action);
    console.log("%cPrevious State:", "color: #9E9E9E; font-weight: 700;", state);
    console.log("%cAction:", "color: #00A7F7; font-weight: 700;", action);
    console.log("%cNext State:", "color: #47B04B; font-weight: 700;", next);

    return next;
  };

  return callbackLogger;
};
