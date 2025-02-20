import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { GithubProvider } from './context/github/GithubContext'
import { AlertProvider } from './context/alert/AlertContext'
import { ThemeProvider } from './context/ThemeContext'

import { Navbar } from './components/Navbar'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'

import { Alert } from './components/Alert'
// import { User } from './components/users/User'

import './App.css'
import { ColorSchemeProvider } from './context/ColorSchemeContext'
import UserDetails from './pages/UserDetails'
// import Footer from './components/layout/Footer'

// Create a client by Claude
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: 5 * 60 * 1000, // Data is considered fresh for 5 minutes
//       cacheTime: 10 * 60 * 1000, // Cache will be garbage collected after 10 minutes
//       retry: 1, // Only retry failed requests once
//       refetchOnWindowFocus: false, // Disable automatic refetching when window regains focus
//     },
//   },
// })
const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ColorSchemeProvider>
          <GithubProvider>
            <AlertProvider>
              <Router>
                <div className='App'>
                  <Navbar />
                  <div className='container'>
                    <Alert />
                    <Routes>
                      <Route path='/' element={<HomePage />} />
                      <Route path='/user/:login' element={<UserDetails />} />
                      <Route path='*' element={<NotFoundPage />} />
                    </Routes>
                  </div>
                </div>
              </Router>
            </AlertProvider>
          </GithubProvider>
        </ColorSchemeProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
