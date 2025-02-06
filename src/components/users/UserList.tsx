import React, { useContext } from 'react'
import { GithubContext } from '../../context/github/GithubContext'
import { Spinner } from '../layout/Spinner'
import { UserItem } from './UserItem'
import { IUser } from '../../context/github/githubTypes'

export const UserList: React.FC = () => {
  const {
    state: { loading, users },
  } = useContext(GithubContext)
  // const { loading, users } = state;

  if (loading) {
    return <Spinner />
  } else {
    return (
      <div style={userStyle}>
        {users.map((user: IUser) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
}
