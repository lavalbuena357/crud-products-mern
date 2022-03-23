import styled from "styled-components"

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