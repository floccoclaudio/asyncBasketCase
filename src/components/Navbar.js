import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
//#region styled components
const StyledLink = styled(Link)`
  box-shadow: 0px 10px 14px -7px #276873;
  border-bottom: 1px solid black;
  background-color: #ff9f1c;
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
  }
`

const StyledNavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
  background-color: #011627;
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
