import React, { useState, useContext, ChangeEvent } from 'react'
import { useMutation } from '@tanstack/react-query'
import { GithubContext } from '../context/github/GithubContext'
import { AlertContext } from '../context/alert/AlertContext'
import { searchUsers } from './../context/github/githubActions'
import { setAlert } from '../context/alert/alertActions'

export const Search: React.FC = () => {
  const {
    // state: { users },
    dispatch,
  } = useContext(GithubContext)
  const alertContext = useContext(AlertContext)
  const [text, setText] = useState('')

  // Use mutation instead of useQuery because this is a user-triggered action
  const { mutate } = useMutation({
    mutationFn: (searchText: string) => searchUsers(dispatch, searchText),
    // onError: (error) => {
    onError: () => {
      setAlert(alertContext.dispatch, 'Error searching users ', 'danger')
    },
  })

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (text === '') {
      setAlert(alertContext.dispatch, 'Please enter something', 'light')
    } else {
      mutate(text)
      setText('')
    }
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)

  return (
    <div>
      <form onSubmit={onSubmit} className='search-form'>
        <input
          type='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
          // disabled={isLoading}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  )
}
