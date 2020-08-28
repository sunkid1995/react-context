import {
  makeActionPending,
  makeActionSuccess,
  makeActionError,
} from "../utils";

const api = () => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          data: [
            {
              name: "sunkid",
              age: 25,
              city: 'Hà nội'
            },
          ],
        }),
      1000
    );
  });
};

export default function applyMiddleware({ dispatch }) {
  return (next) => action => {
    if (typeof action === 'function') {
      return action(dispatch);
    }

    const { type, promise, dataKey } = action;

    if (!promise) return next(action);

    next(makeActionPending({ type, dataKey }));

    return promise(api)
    .then((res) => {
      if (res) return next(makeActionSuccess({ type, dataKey, data: res.data }));
    })
    .catch((err) => {
      return next(makeActionError({ type, dataKey, errors: err }));
    });
  }
}
