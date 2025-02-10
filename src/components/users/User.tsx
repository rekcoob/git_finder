import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { GithubContext } from '../../context/github/GithubContext'
import { getUser, getUserRepos } from '../../context/github/githubActions'
import { Spinner } from '../layout/Spinner'
import { RepoList } from '../repos/RepoList'

type Params = {
  login: string
}

export const User: React.FC = () => {
  const { login } = useParams<Params>() // Access route parameter using useParams
  const {
    state: { loading, user, repos },
    dispatch,
  } = useContext(GithubContext)

  useEffect(() => {
    if (login) {
      getUser(dispatch, login)
      getUserRepos(dispatch, login)
    }
    // eslint-disable-next-line
  }, [login, dispatch])

  // Destructure User
  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    html_url,
    followers,
    following,
    public_repos,
    hireable,
  } = user || {} // Optional chaining in case user is undefined

  if (loading) return <Spinner />

  return (
    <div className='user_details'>
      <div className=' grid-3 my-2 p-2'>
        <div className='all-center '>
          <img
            src={avatar_url}
            className='my-2'
            alt={`${name}'s avatar`}
            style={{ width: '200px' }}
          />
          <h1>{name}</h1>
          <p>{login}</p>
          <a href={html_url} className='btn btn-primary my-1'>
            Visit Github Profile
          </a>
          <br></br>
          {bio && <p>{bio}</p>}
          <br></br>
          {location && <p style={{ opacity: '0.8' }}>{location}</p>}
          <br></br>
          {company && <p style={{ opacity: '0.8' }}>{company}</p>}
        </div>
        <div style={{ gridColumn: 'span 2' }}>
          <RepoList repos={repos} />
        </div>
      </div>
      <div
        className='flex center'
        style={{ gap: '30px', marginBottom: '20px' }}
      >
        <div>
          <p>
            <strong>Followers:</strong> {followers}
          </p>
        </div>
        <div>
          <p>
            <strong>Hireable:</strong> {hireable ? '✅' : '❌'}
          </p>
        </div>
        <div>
          <p>
            <strong>Public Repos:</strong> {public_repos}
          </p>
        </div>
      </div>
    </div>
  )
}
