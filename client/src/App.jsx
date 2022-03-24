import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { GlobalStyles } from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import useTheme from './Hooks/useTheme'
import { darkTheme, lightTheme } from './styles/themes'
import Home from './Pages/Home'
import Detail from './Pages/Detail'
import NotFound from './Pages/NotFound'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Container } from './styles/Styles'

function App() {

  const [theme, handleThemeToggler] = useTheme()

  const currentTheme = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={currentTheme}>
      <Container>
        <GlobalStyles />
        <Header handleThemeToggler={handleThemeToggler} theme={theme} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default App
