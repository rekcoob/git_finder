import React from 'react'
import { Link } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'

type Props = {
  icon?: string
  title?: string
}

export const Navbar: React.FC<Props> = ({
  // title = '🔍 Github Searcher',
  title = 'Github Search 🔍',
  icon = 'fab fa-github',
}) => {
  return (
    <nav className='navbar'>
      <Link to='/'>
        <h1>
          <i className={icon} /> {title}
        </h1>
      </Link>

      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
      <ThemeToggle />
    </nav>
  )
}
