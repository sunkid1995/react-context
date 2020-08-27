// action
import { CREATE_USER } from './action';

export default (state, action) => {
  switch(action.type) {
    case CREATE_USER:
      return { 
        ...state,
        dataList: {
          data: [...state.dataList.data, action.payload],
          error: undefined,
          loading: false,
        }
      }
    default:
      return state;
  }
};