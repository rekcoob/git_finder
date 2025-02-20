import React, { useContext, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { GithubContext } from '../context/github/GithubContext'
import { Search } from '../components/Search'
import { IUser } from '../context/github/githubTypes'
import { ACTIONS } from '../context/github/githubTypes'
import { Spinner } from '../components/Spinner'

const fetchTopUsers = async () => {
  const { data } = await axios.get(
    'https://api.github.com/search/users?q=followers:>1000&sort=followers&order=desc&per_page=18'
  )
  return data.items
}

export const HomePage: React.FC = () => {
  const { dispatch } = useContext(GithubContext)
  const {
    state: { users },
  } = useContext(GithubContext)

  // Use React Query but sync with context
  const { data, isLoading, isError } = useQuery({
    queryKey: ['topUsers'],
    queryFn: fetchTopUsers,
    // Don't use data directly from React Query
    enabled: true,
  })

  // Sync React Query data with context
  useEffect(() => {
    if (data) {
      dispatch({
        type: ACTIONS.GET_TOP_USERS,
        payload: data,
      })
    }
  }, [data, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <div className='error'>Something went wrong!</div>
  }

  return (
    <>
      <Search />
      <div className='user_list'>
        {users.map((user: IUser) => (
          <div key={user.id} className='user-list-card'>
            <img src={user.avatar_url} alt={user.login} />
            <h3>{user.login}</h3>
            <Link to={`/user/${user.login}`}>View Profile</Link>
          </div>
        ))}
      </div>
    </>
  )
}
