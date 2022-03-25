import React from 'react'
import { FooterCtn } from '../styles/Styles'

function Footer() {

  function getYear() {
    return new Date().getFullYear()
  }

  return (
    <FooterCtn>
      <span>&copy;{getYear()} - Albert Valbuena</span>
    </FooterCtn>
  )
}

export default Footer