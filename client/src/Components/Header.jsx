import React from 'react'
import { Link } from 'react-router-dom'
import ThemeToggler from './ThemeToggler'
import { HeaderCtn, Title } from '../styles/Styles'

function Header(props) {
  return (
    <HeaderCtn>
      <Title><Link to='/'>ToDo List App</Link></Title>
      <ThemeToggler changeTheme={props.handleThemeToggler} theme={props.theme} /> 
    </HeaderCtn>
  )
}

export default Header