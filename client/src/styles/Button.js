import styled from "styled-components";

export const Button = styled.button(({theme}) => ({
   cursor: 'pointer',
   border: 'none',
   backgroundColor: theme.bottonBg,
   color: '#fff',
   padding: '5px',
   fontSize: '1rem'
}))