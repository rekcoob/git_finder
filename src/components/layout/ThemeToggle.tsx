// ThemeToggle.tsx
import React from 'react'
import { useTheme } from '../../context/ThemeContext'

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <label className='toggle'>
      <input
        type='checkbox'
        id='toggleDarkMode'
        onClick={toggleTheme}
        checked={theme === 'dark'}
      />
      <span className='slider'></span>
    </label>
  )
}
