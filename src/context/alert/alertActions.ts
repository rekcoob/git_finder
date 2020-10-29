import { Dispatch } from 'react';
import { AlertActionType, REMOVE_ALERT, SET_ALERT } from './alertTypes';

// Set Alert
export const setAlert = (
	dispatch: Dispatch<AlertActionType>,
	msg: string,
	type: string
) => {
	dispatch({
		type: SET_ALERT,
		payload: { msg, type },
	});

	setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
};
