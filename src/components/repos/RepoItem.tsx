import React from 'react'
import { IUserRepo } from '../../context/github/githubTypes'

type Props = {
  repo: IUserRepo
}

export const RepoItem: React.FC<Props> = ({
  repo: {
    name,
    html_url,
    description,
    language,
    updated_at,
    pulls_url,
    forks,
    forks_count,
    stargazers_count,
  },
}) => {
  return (
    <div className='repo-list'>
      <h3>
        <a href={html_url} className='repo-name'>
          {name}
        </a>
      </h3>
      <p>{description}</p>
      <p>
        {language} <span>{updated_at}</span>
      </p>
      <p>
        ⭐{stargazers_count}
        {/* {pulls_url} */}
        <span>
          {' '}
          📌{forks}|{forks_count}
        </span>
      </p>
    </div>
  )
}
