import React from 'react'
import { Link } from 'react-router-dom'
import { IUser } from '../../context/github/githubTypes'
import styles from './UserItem.module.css'

type Props = {
  user: IUser
}

export const UserItem: React.FC<Props> = ({ user: { login, avatar_url } }) => {
  return (
    <div className={styles.card}>
      <img src={avatar_url} alt={login} className={styles.avatar} />
      <h3 className={styles.username}>{login}</h3>
      <Link to={`/user/${login}`} className={styles.button}>
        View Profile
      </Link>
    </div>
  )
}
