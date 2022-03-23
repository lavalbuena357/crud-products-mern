import React from 'react'
import { Button } from '../styles/Button'


function ThemeToggler(props) {

  return (
    <Button onClick={props.changeTheme}>
      Cambiar tema
    </Button>
  )
}

export default ThemeToggler