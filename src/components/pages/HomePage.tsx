import React, { useEffect, useContext } from 'react'
import { Search } from '../users/Search'
import { UserList } from '../users/UserList'
import { GithubContext } from '../../context/github/GithubContext'
import { getTopUsers } from '../../context/github/githubActions'

export const HomePage: React.FC = () => {
  const { dispatch } = useContext(GithubContext)

  useEffect(() => {
    getTopUsers(dispatch)
  }, [dispatch])

  return (
    <>
      <Search />
      <UserList />
    </>
  )
}
