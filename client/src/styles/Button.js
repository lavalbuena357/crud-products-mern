import styled from "styled-components";

export const Button = styled.button`
   cursor: pointer;
   border: none;
   background-color: ${({ theme }) => theme.bottonBg};
   color: #fff;
   padding: 5px;
   font-size: 1rem;
`