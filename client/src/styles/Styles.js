import styled from "styled-components"

//CONTAINER
export const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
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
  justifyContent: 'center',
  alignItems: 'center'
}))

export const BoxButton = styled(Button)`
   border-radius: 5px
`

//HEADER
export const HeaderCtn = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

//TITLE
export const Title = styled.h1({
  textTransform: 'uppercase'
})

//FOOTER
export const FooterCtn = styled.div(({ theme }) => ({
  position: 'absolute',
  bottom: '0px',
  left: '0px',
  right: '0px',
  background: theme.bottonBg,
  color: '#fff',
  display: 'flex',
  justifyContent: 'center',
  padding: '10px 0'
}))
  

