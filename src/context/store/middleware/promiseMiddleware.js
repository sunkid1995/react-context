import api from '../../../core/axios';

import {
  makeActionPending,
  makeActionSuccess,
  makeActionError,
} from "../utils";

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
