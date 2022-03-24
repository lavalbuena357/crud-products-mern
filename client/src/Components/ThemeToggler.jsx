import React from 'react'
import { Button } from '../styles/Styles'
import { BsSunFill, BsCloudMoon } from "react-icons/bs"

function ThemeToggler(props) {

  return (
    <Button onClick={props.changeTheme}>
      {props.theme === 'light' ? <BsSunFill/> : <BsCloudMoon/> }
    </Button>
  )
}

export default ThemeToggler