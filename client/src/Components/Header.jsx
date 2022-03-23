import React from 'react'
import ThemeToggler from './ThemeToggler'
import { Container, Title } from '../styles/Header'

function Header(props) {
  return (
    <Container>
      <Title>Header</Title>
      <ThemeToggler changeTheme={props.handleThemeToggler} /> 
    </Container>
  )
}

export default Header