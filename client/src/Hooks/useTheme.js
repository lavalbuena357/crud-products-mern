import React, { useState } from 'react'

const THEMES = {
  LIGHT: "light",
  DARK: "dark"
}

function useTheme() {
  const [theme, setTheme] = useState(THEMES.LIGHT)

  function handleThemeToggler() {
    theme === THEMES.LIGHT ? setTheme(THEMES.DARK) : setTheme(THEMES.LIGHT)
  }

  return [theme, handleThemeToggler]
}

export default useTheme