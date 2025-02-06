import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react'

interface ColorSchemeContextType {
  colorScheme: string
  setColorScheme: (scheme: string) => void
}

// Define available color schemes
const colorSchemes: { [key: string]: { primary: string; secondary: string } } =
  {
    blue: {
      primary: '#0056b3',
      secondary: '#1e84ff',
    },
    green: {
      primary: 'green',
      secondary: 'lightgreen',
    },
    orange: {
      primary: 'orange',
      secondary: '#ffcc80',
    },
  }

// Create the context with default values
const ColorSchemeContext = createContext<ColorSchemeContextType | undefined>(
  undefined
)

// Color Scheme provider component
export const ColorSchemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [colorScheme, setColorScheme] = useState<string>(() => {
    const savedColorScheme = localStorage.getItem('colorScheme')
    return savedColorScheme ? savedColorScheme : 'blue'
  })

  useEffect(() => {
    const root = document.documentElement
    const colors = colorSchemes[colorScheme]

    root.style.setProperty('--primary-color', colors.primary)
    root.style.setProperty('--secondary-color', colors.secondary)

    localStorage.setItem('colorScheme', colorScheme)
  }, [colorScheme])

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, setColorScheme }}>
      {children}
    </ColorSchemeContext.Provider>
  )
}

// Custom hook to use the ColorSchemeContext
export const useColorScheme = (): ColorSchemeContextType => {
  const context = useContext(ColorSchemeContext)
  if (!context) {
    throw new Error('useColorScheme must be used within a ColorSchemeProvider')
  }
  return context
}
