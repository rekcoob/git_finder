import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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

const App = () => {
  return (
    <ThemeProvider>
      <ColorSchemeProvider>
        <GithubProvider>
          <AlertProvider>
            <Router>
              <div className='App'>
                <Navbar />
                {/* <UserDetails /> */}
                <div className='container'>
                  <Alert />
                  <Routes>
                    <Route path='/' element={<HomePage />} />
                    {/* <Route path='/user/:login' element={<User />} /> */}
                    <Route path='/user/:login' element={<UserDetails />} />
                    <Route path='*' element={<NotFoundPage />} />
                  </Routes>
                  {/* <Footer /> */}
                </div>
              </div>
            </Router>
          </AlertProvider>
        </GithubProvider>
      </ColorSchemeProvider>
    </ThemeProvider>
  )
}

export default App
