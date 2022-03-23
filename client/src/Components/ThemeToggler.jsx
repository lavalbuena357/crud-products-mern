import React from 'react'
import { Button } from '../styles/Button'
import { BsSunFill, BsCloudMoon } from "react-icons/bs"
import useTheme from '../Hooks/useTheme'


function ThemeToggler(props) {

  return (
    <Button onClick={props.changeTheme}>
      {props.theme === 'light' ? <BsSunFill/> : <BsCloudMoon/> }
    </Button>
  )
}

export default ThemeToggler