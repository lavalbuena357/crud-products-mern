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
   font-size: ${props => props.fontSize + 'rem'}
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

//SUBTITLE
export const Subtitle = styled.h2(({theme}) => ({
  color: theme.color,
  margin: '0'
}))

//BOX CONTAINER
export const BoxCtn = styled.div({
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
  justifyContent: 'space-between',
  maxWidth: '200px',
  margin: '10px 5px',
  padding: '10px',
  background: theme.cardBg,
  color: theme.background
}))

//BOX IMAGE
export const BoxImage = styled.div((props) => ({
  display: 'flex',
  justifyContent: 'center',
  img: {
    width: props.imgSize + 'px',
  }
}))

//BOX INFO
export const BoxInfo = styled.div((props) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: props.align,
  p: {
    margin: '0'
  },
  h2: {
    fontWeight: '600',
    margin: '0'
  }
}))

//BOX BUTTONS
export const BoxButtons = styled.div({
  display: 'flex',
  flexDirection: 'arrow',
  justifyContent: 'space-around',
  margin: '10px 0'
})

//FORM
export const FormCtn = styled.form(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '15px',
  maxWidth: '600px',
  alignSelf: 'center',
  border: `1px solid ${theme.color}`,
  marginBottom: '10px'
}))

//INPUT TEXT
export const InputText = styled.input(({theme}) => ({
  "&:focus-visible": {
    outline: 'none',
  },
  padding: '10px',
  borderRadius: '5px',
  border: 'none',
  background: theme.color,
  color: theme.background,
}))

//LABEL
export const Label = styled.label({
  display: 'flex',
  margin: '5px 0',
})

//TEXT AREA
export const TextArea = styled.textarea(({theme}) => ({
  "&:focus-visible": {
    outline: 'none',
  },
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  padding: '10px',
  borderRadius: '5px',
  border: 'none',
  background: theme.color,
  color: theme.background,
  marginBottom: '10px'
})) 

//SUBMIT BUTTON
export const SubmitBtn = styled.input(({theme}) => ({
  maxWidth: '80px',
  padding: '10px',
  borderRadius: '5px',
  border: 'none',
  background: theme.bottonBg,
  color: 'white',
  cursor: 'pointer',
  "&:hover":  {
    background: theme.cardBg,
    color: theme.background
  }
}))

//DETAIL
export const DetailBox = styled.div(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  maxWidth: '500px',
  background: theme.cardBg,
  padding: '20px',
  color: theme.background,
  borderRadius: '10px'
}))

//FOOTER
export const FooterCtn = styled.div(({ theme }) => ({
  background: theme.bottonBg,
  color: '#fff',
  display: 'flex',
  justifyContent: 'center',
  padding: '10px 0',
  marginTop: '20px'
}))
  

