import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle(({ theme }) => ({
  body: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    background: theme.background,
    color: theme.color,
    transition: 'all 0.3s linear'
  }
}))