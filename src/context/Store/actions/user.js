// type
import { CREATE_USER } from '../types';

export const createUser = payload => {
	return {
		type: CREATE_USER,
		payload,
	}
}