import styled from 'styled-components'
import React from 'react'

const CartContainer = styled('div')`
  border-radius: 10px;
  width: 100%;
  background-color: white;
`
const StyledTitle = styled('div')`
  margin: 10px;
  font-size: 1.5rem;
  font-weight: bold;
`

const StyledCartContainer = styled('div')`
  padding: 15px;
`

const StyledHeaderRow = styled('div')`
  font-weight: bold;
  font-size: 20px;
  display: grid;
  grid-template-columns: auto 15% 15% 15% 15%;
  border-bottom: 1px solid black;
  & > * {
    &:not(:first-child) {
      border-left: 1px solid black;
    }
  }
`
const StyledRowContainer = styled('div')`
  display: grid;
  grid-template-columns: auto 15% 15% 15% 15%;
  &:not(:last-of-type) {
    border-bottom: 1px solid black;
  }
  & > * {
    &:not(:first-child) {
      border-left: 1px solid black;
    }
  }
`
const StyledItemOfRow = styled('div')`
  padding: 10px;
`

const Cart = () => {
  return (
    <CartContainer>
      <StyledTitle>Your cart contains:</StyledTitle>
      <StyledCartContainer>
        <StyledHeaderRow>
          <StyledItemOfRow>Type </StyledItemOfRow>
          <StyledItemOfRow>Code </StyledItemOfRow>
          <StyledItemOfRow>QTY </StyledItemOfRow>
          <StyledItemOfRow>Price </StyledItemOfRow>
        </StyledHeaderRow>
        {/* {[...new Array(4)].map(l => {
          return ( */}
        <StyledRowContainer>
          <StyledItemOfRow>Type </StyledItemOfRow>
          <StyledItemOfRow>Code </StyledItemOfRow>
          <StyledItemOfRow>QTY </StyledItemOfRow>
          <StyledItemOfRow>Price </StyledItemOfRow>
        </StyledRowContainer>
        {/* })} */}
      </StyledCartContainer>
    </CartContainer>
  )
}

export default Cart
