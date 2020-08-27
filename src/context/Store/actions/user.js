// type
import { CREATE_USER, GET_USER } from '../types';

export const createUser = payload => {
	return {
		dataKey: 'dataList',
		type: CREATE_USER,
		payload,
		promise: api => api(),
	}
}

export const getUser = payload => {
	return {
		dataKey: 'dataList',
		type: GET_USER,
		payload,
		promise: api => api(),
	}
}
