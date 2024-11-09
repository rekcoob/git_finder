// ThemeToggle.tsx
import React, { useState } from 'react'

export const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode)
    // Optionally, you can add logic here to apply classes or manage global theme state
  }

  return (
    <button onClick={toggleTheme} className='btn btn-toggle-theme'>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}
