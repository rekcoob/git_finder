import axios from 'axios';
import { Dispatch } from 'react';
import { GithubActionType, ACTIONS } from './githubTypes';

let githubClientId: string | undefined;
let githubClientSecret: string | undefined;

if (process.env.NODE_ENV !== 'production') {
	githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
	githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
	githubClientId = process.env.GITHUB_CLIENT_ID;
	githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

// Search Users
const searchUsers = async (
	dispatch: Dispatch<GithubActionType>,
	text: string
) => {
	setLoading(dispatch);

	const res = await axios.get(
		`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
	);
	dispatch({
		type: ACTIONS.SEARCH_USERS,
		payload: res.data.items,
	});
};

// Get Single User
const getUser = async (
	dispatch: Dispatch<GithubActionType>,
	username: string
) => {
	setLoading(dispatch);

	const res = await axios.get(
		`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
	);

	dispatch({
		type: ACTIONS.GET_USER,
		payload: res.data,
	});
};

// Get User Repositories
const getUserRepos = async (
	dispatch: Dispatch<GithubActionType>,
	username: string
) => {
	setLoading(dispatch);

	const res = await axios.get(
		`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
	);

	dispatch({
		type: ACTIONS.GET_REPOS,
		payload: res.data,
	});
};

// Clear Users From State
const clearUsers = (dispatch: Dispatch<GithubActionType>) =>
	dispatch({ type: ACTIONS.CLEAR_USERS });

// Set Loading To True
const setLoading = (dispatch: Dispatch<GithubActionType>) =>
	dispatch({ type: ACTIONS.SET_LOADING });

export { searchUsers, getUser, getUserRepos, clearUsers };
