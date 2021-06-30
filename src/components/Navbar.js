import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
//#region styled components
const StyledLink = styled(Link)`
  box-shadow: 0px 10px 14px -7px #276873;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    239deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  border-radius: 8px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: 'Times New Roman', Times, serif;
  font-size: 20px;
  font-weight: bold;
  padding: 15px 30px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #3d768a;
  :hover {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      239deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 1) 35%,
      rgba(0, 212, 255, 1) 100%
    );
  }
`

const StyledNavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
`
//#endregion
const Navbar = () => {
  return (
    <StyledNavBar>
      <StyledLink to="/">Shop</StyledLink>
      <StyledLink to="/my-cart">My Cart</StyledLink>
    </StyledNavBar>
  )
}

export default Navbar
