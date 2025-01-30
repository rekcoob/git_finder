import React, { useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
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
    public_gists,
    hireable,
  } = user || {} // Optional chaining in case user is undefined

  if (loading) return <Spinner />

  return (
    <>
      <Link to='/' className='btn btn-light'>
        Back To Search
      </Link>
      Hireable:{' '}
      {/* {hireable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )} */}
      {hireable ? (
        <span aria-label='hireable'>✅</span>
      ) : (
        <span aria-label='not hireable'>❌</span>
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            className='round-img'
            alt=''
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <>
              <h3>Bio</h3>
              <p>{bio}</p>
            </>
          )}
          <a href={html_url} className='btn btn-primary my-1'>
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <>
                  <strong>Username: </strong> {login}
                </>
              )}
            </li>

            <li>
              {company && (
                <>
                  <strong>Company: </strong> {company}
                </>
              )}
            </li>

            <li>
              {blog && (
                <>
                  <strong>Website: </strong> {blog}
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-light'>Public Repos: {public_repos}</div>
        <div className='badge badge-dark'>Public Gists: {public_gists}</div>
      </div>
      <RepoList repos={repos} />
    </>
  )
}
