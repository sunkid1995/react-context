export default function logger({ getState }) {
  return next => action => {
    console.log("%cPrevious State:", "color: #9E9E9E; font-weight: 700;", getState());
    console.log("%cAction:", "color: #00A7F7; font-weight: 700;", action);
    next(action)
    console.log("%cNext State:", "color: #47B04B; font-weight: 700;", getState());
  }
};
