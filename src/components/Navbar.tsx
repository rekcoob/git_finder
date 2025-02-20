import React from 'react'
import { Link } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'
import { ColorPicker } from './ColorPicker'

type Props = {
  icon?: string
  title?: string
}

export const Navbar: React.FC<Props> = ({
  title = '🧩 Git_Finder',
  // icon = 'fab fa-github',
}) => {
  return (
    <nav className='navbar'>
      <Link to='/' className='logo'>
        <h1>{title}</h1>
      </Link>
      <ColorPicker />
      <ThemeToggle />
    </nav>
  )
}
