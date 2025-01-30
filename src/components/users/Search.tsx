import React, { useState, useContext, ChangeEvent } from 'react'
import { GithubContext } from '../../context/github/GithubContext'
import { AlertContext } from '../../context/alert/AlertContext'
import { searchUsers, clearUsers } from './../../context/github/githubActions'
import { setAlert } from '../../context/alert/alertActions'

export const Search: React.FC = () => {
  const {
    state: { users },
    dispatch,
  } = useContext(GithubContext)
  const alertContext = useContext(AlertContext)

  const [text, setText] = useState('')

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (text === '') {
      setAlert(alertContext.dispatch, 'Please enter something', 'light')
    } else {
      searchUsers(dispatch, text)
      setText('')
    }
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-primary btn-block'
        />
      </form>

      {users.length > 0 && (
        <button
          className='btn btn-dark btn-block'
          onClick={() => clearUsers(dispatch)}
        >
          Clear
        </button>
      )}
    </div>
  )
}
