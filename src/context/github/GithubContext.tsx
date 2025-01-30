import React, { createContext, Dispatch, useReducer, ReactNode } from 'react'
import { githubReducer } from './githubReducer'
import { GithubActionType, GithubStateType, IUser } from './githubTypes'

const initialState = {
  users: [],
  user: {} as IUser,
  repos: [],
  loading: false,
}

const GithubContext = createContext<{
  state: GithubStateType
  dispatch: Dispatch<GithubActionType>
}>({
  state: initialState,
  dispatch: () => null,
})

interface GithubProviderProps {
  children: ReactNode
}

const GithubProvider: React.FC<GithubProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(githubReducer, initialState)

  return (
    <GithubContext.Provider value={{ state, dispatch }}>
      {children}
    </GithubContext.Provider>
  )
}

export { GithubProvider, GithubContext }
