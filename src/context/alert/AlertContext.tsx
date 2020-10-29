import React, { createContext, useReducer } from 'react';
import { alertReducer } from './alertReducer';
import { AlertStateType } from './alertTypes';

const initialState = null;

const AlertContext = createContext<AlertStateType | any>(initialState);

const AlertProvider: React.FC = (props) => {
	// @ts-ignore
	const [state, dispatch] = useReducer(alertReducer, initialState);

	return (
		<AlertContext.Provider
			value={{
				alert: state,
				dispatch,
			}}
		>
			{props.children}
		</AlertContext.Provider>
	);
};

export { AlertContext, AlertProvider };
