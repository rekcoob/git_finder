/**
 * User Interface
 */
export interface IUser {
  id: number
  name: string
  company: string
  avatar_url: string
  location: string
  bio: string
  blog: string
  login: string
  html_url: string
  followers: number
  following: number
  public_repos: string
  public_gists: string
  hireable: string
}

/**
 * Repository Interface
 */
export interface IUserRepo {
  id: number
  name: string
  html_url: string
}

export type GithubStateType = {
  users: IUser[]
  user: IUser
  repos: IUserRepo[]
  loading: boolean
}

export type GithubActionType =
  | { type: 'SEARCH_USERS'; payload: IUser[] }
  | { type: 'GET_USER'; payload: IUser }
  | { type: 'CLEAR_USERS' }
  | { type: 'GET_REPOS'; payload: IUserRepo[] }
  | { type: 'SET_LOADING' }

export enum ACTIONS {
  SEARCH_USERS = 'SEARCH_USERS',
  GET_USER = 'GET_USER',
  CLEAR_USERS = 'CLEAR_USERS',
  GET_REPOS = 'GET_REPOS',
  SET_LOADING = 'SET_LOADING',
}
