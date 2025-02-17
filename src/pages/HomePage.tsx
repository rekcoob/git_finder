import React, { useEffect, useContext } from 'react'
import { GithubContext } from '../context/github/GithubContext'
import { getTopUsers } from '../context/github/githubActions'
import { IUser } from '../context/github/githubTypes'
import { Link } from 'react-router-dom'
import { Search } from '../components/Search'

export const HomePage: React.FC = () => {
  const { dispatch } = useContext(GithubContext)
  const {
    state: { users },
  } = useContext(GithubContext)

  useEffect(() => {
    getTopUsers(dispatch)
  }, [dispatch])

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
