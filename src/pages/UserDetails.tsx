// src/pages/UserDetails.jsx
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { GithubContext } from '../context/github/GithubContext'
import { getUser, getUserRepos } from '../context/github/githubActions'
import { Spinner } from '../components/Spinner'
import { IUserRepo } from '../context/github/githubTypes'

export default function UserDetails() {
  const { login } = useParams()
  const {
    state: { user, repos },
    dispatch,
  } = useContext(GithubContext)

  // Query for fetching user data using an existing action
  const { isLoading: isUserLoading } = useQuery({
    queryKey: ['user', login], // Unique query key for caching and refetching
    queryFn: () => getUser(dispatch, login!), // Fetch user data
    enabled: !!login, // Only run the query if login exists
  })

  // Query for fetching user repositories using an existing action
  const { isLoading: isReposLoading } = useQuery({
    queryKey: ['userRepos', login], // Unique query key for caching and refetching
    queryFn: () => getUserRepos(dispatch, login!), // Fetch user repositories
    enabled: !!login, // Only run the query if login exists
  })

  // Destructure User
  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    html_url,
    followers,
    public_repos,
    hireable,
  } = user || {}

  if (isUserLoading || isReposLoading) return <Spinner />
  // console.log(user)

  return (
    <div className='user_details'>
      <div className=' grid-3 my-2 p-2'>
        <div className='user_info p-1'>
          <img src={avatar_url} alt={`${name}'s avatar`} />
          <h1>{name}</h1>
          <p style={{ opacity: '0.6' }}>{login}</p>
          <a href={html_url} className='btn btn-primary btn-block my-1'>
            Visit Github Profile
          </a>
          <br></br>
          {bio && <p>{bio}</p>}
          <br></br>
          {location && <p style={{ opacity: '0.8' }}>{location}</p>}
          <br></br>
          {company && <p style={{ opacity: '0.8' }}>{company}</p>}
        </div>

        <div style={{ gridColumn: 'span 2' }} className='p-1 repo-list'>
          {repos.map((repo: IUserRepo) => (
            <div className=''>
              <h3 className='repo-name'>
                <a href={repo.html_url} className='repo-name'>
                  {repo.name}
                </a>
              </h3>
              <p>{repo.description}</p>
              <p>
                {repo.language}
                {/* <span>{repo.updated_at}</span> */}
              </p>
              <p>
                ⭐{repo.stargazers_count}
                {/* {pulls_url} */}
                <span> 📌{repo.forks_count}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className='flex center'
        style={{ gap: '30px', paddingBottom: '30px' }}
      >
        <p>
          <strong>Followers:</strong> {followers}
        </p>
        <p>
          <strong>Hireable:</strong> {hireable ? '✅' : '❌'}
        </p>
        <p>
          <strong>Public Repos:</strong> {public_repos}
        </p>
      </div>
    </div>
  )
}
