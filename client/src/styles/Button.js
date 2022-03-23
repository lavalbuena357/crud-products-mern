import styled from "styled-components";

export const Button = styled.button(({theme}) => ({
   cursor: 'pointer',
   border: 'none',
   backgroundColor: theme.bottonBg,
   color: '#fff',
   width: '35px',
   height: '35px',
   fontSize: '1.3rem',
   borderRadius: '25px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center'
}))