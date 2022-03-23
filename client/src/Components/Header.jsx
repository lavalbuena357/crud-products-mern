import React from 'react'
import ThemeToggler from './ThemeToggler'
import { HeaderCtn, Title } from '../styles/Header'

function Header(props) {
  return (
    <HeaderCtn>
      <Title>ToDo List App</Title>
      <ThemeToggler changeTheme={props.handleThemeToggler} theme={props.theme} /> 
    </HeaderCtn>
  )
}

export default Header