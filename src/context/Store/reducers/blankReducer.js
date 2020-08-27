// utils
import { PENDING, SUCCESS, ERROR } from "../utils";

export default function blankReducer(state, action) {
  const { type, payload } = action;

  if (type.endsWith(PENDING)) {
    const { dataKey } = payload;
    const { [dataKey]: bundle } = state;

    return {
      ...state,
      [dataKey]: {
        ...bundle,
        loading: true,
        data: undefined,
        errors: undefined,
      },
    };
  }

  if (type.endsWith(SUCCESS)) {
    const { dataKey, data } = payload;
    const { [dataKey]: bundle } = state;

    return {
      ...state,
      [dataKey]: {
        ...bundle,
        loading: false,
        data,
        errors: undefined,
      },
    };
  }

  if (type.endsWith(ERROR)) {
    const { dataKey, errors } = payload;
    const { [dataKey]: bundle } = state;

    return {
      ...state,
      [dataKey]: { ...bundle, loading: true, data: undefined, errors },
    };
  }

  return state;
}
