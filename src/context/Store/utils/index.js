export const PENDING = 'PENDING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export const makeActionPending = ({
	type,
	dataKey
}) => {
	return {
		type: `${type}_${PENDING}`,
		payload: {
			dataKey
		}
	}
}

export const makeActionSuccess = ({
  type,
  dataKey,
  data,
  ...rest
}) => ({
  type: `${type}_${SUCCESS}`,
  payload: {
    dataKey,
    data,
    ...rest
  }
});

export const makeActionError = ({
  type,
  dataKey,
  errors,
  ...rest
}) => ({
  type: `${type}_${ERROR}`,
  payload: {
    dataKey,
    errors,
    ...rest
  }
});
