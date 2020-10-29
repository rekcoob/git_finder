import {
	AlertActionType,
	AlertStateType,
	SET_ALERT,
	REMOVE_ALERT,
} from './alertTypes';

export const alertReducer = (
	state: AlertStateType,
	action: AlertActionType
) => {
	switch (action.type) {
		case SET_ALERT:
			return action.payload;
		case REMOVE_ALERT:
			return null;
		default:
			return state;
	}
};
