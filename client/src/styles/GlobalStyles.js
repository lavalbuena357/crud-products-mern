import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle(({ theme }) => ({
  body: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    background: theme.background,
    color: theme.color,
    transition: 'color 0.3s linear, background 0.3s linear',
    padding: '20px',
    userSelect: 'none'
  }
}))