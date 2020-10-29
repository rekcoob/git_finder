import React, { createContext, Dispatch, useReducer } from 'react';
import { githubReducer } from './githubReducer';
import { GithubActionType, GithubStateType } from './githubTypes';

const initialState = {
	users: [],
	user: {},
	repos: [],
	loading: false,
};

const GithubContext = createContext<{
	state: GithubStateType;
	dispatch: Dispatch<GithubActionType>;
}>({
	state: initialState,
	dispatch: () => null,
});

const GithubProvider: React.FC = (props) => {
	const [state, dispatch] = useReducer(githubReducer, initialState);

	return (
		<GithubContext.Provider value={{ state, dispatch }}>
			{props.children}
		</GithubContext.Provider>
	);
};

export { GithubProvider, GithubContext };
