import styled from "styled-components"

//CONTAINER
export const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '100vh'
})

//BUTTON
export const Button = styled.button(({theme}) => ({
  cursor: 'pointer',
  border: 'none',
  backgroundColor: theme.bottonBg,
  color: '#fff',
  padding: '10px',
  fontSize: '1.3rem',
  borderRadius: '25px',
  display: 'flex',
  "&:hover":  {
    background: theme.cardBg,
    color: theme.background
  }
}))

export const BoxButton = styled(Button)`
   border-radius: 5px;
`

//HEADER
export const HeaderCtn = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px 30px',
  a: {
    
  }
})

// TITLE
export const Title = styled.h1(({theme}) => ({
  textTransform: 'uppercase',
  a: {
    color: theme.color,
    textDecoration: 'none'
  }
}))

//HOME CONTAINER
export const HomeCtn = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  margin: '5px 30px',
  button: {
    display: 'flex',
    alignSelf: 'flex-end',
  }
})

//CARDS
export const Cards = styled.div({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  margin: '20px'
})

//CARD
export const Card = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '200px',
  margin: '10px 5px',
  padding: '10px',
  background: theme.cardBg,
  color: theme.background,
  h2: {
    fontWeight: '600',
    margin: '0'
  },
  p: {
    margin: '0'
  },
  img: {
    width: '200px'
  },
  div: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '10px 0'
  }
}))

//FOOTER
export const FooterCtn = styled.div(({ theme }) => ({
  background: theme.bottonBg,
  color: '#fff',
  display: 'flex',
  justifyContent: 'center',
  padding: '10px 0'
}))
  

