export interface IAlert {
	msg: string;
	type: string;
}

export type AlertStateType = {
	alert: IAlert;
};

export type AlertActionType =
	| { type: 'SET_ALERT'; payload: IAlert }
	| { type: 'REMOVE_ALERT' };

export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';
