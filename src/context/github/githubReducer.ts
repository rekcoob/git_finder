import { GithubStateType, GithubActionType, ACTIONS } from './githubTypes'

export const githubReducer = (
  state: GithubStateType,
  action: GithubActionType
) => {
  switch (action.type) {
    case ACTIONS.GET_TOP_USERS:
      return { ...state, users: action.payload, loading: false }
    case ACTIONS.SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      }
    case ACTIONS.GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      }
    case ACTIONS.CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      }
    case ACTIONS.GET_REPOS: {
      return {
        ...state,
        repos: action.payload,
        loading: false,
      }
    }
    case ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}
