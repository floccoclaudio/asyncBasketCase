import { useSelector } from 'react-redux'
import styled from 'styled-components'
import React from 'react'
//#region styled components
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

//#endregion

const Cart = () => {
  const cartItems = useSelector(state => state.cartData.currentCart)
  return (
    <CartContainer>
      <StyledTitle>Your cart contains:</StyledTitle>
      <StyledCartContainer>
        <StyledHeaderRow>
          <StyledItemOfRow>Type </StyledItemOfRow>
          <StyledItemOfRow>Code </StyledItemOfRow>
          <StyledItemOfRow>Category </StyledItemOfRow>
          <StyledItemOfRow>Price </StyledItemOfRow>
        </StyledHeaderRow>

        {cartItems.map(({ title, category, price, id }) => (
          <StyledRowContainer>
            <StyledItemOfRow>{title} </StyledItemOfRow>
            <StyledItemOfRow>{id} </StyledItemOfRow>
            <StyledItemOfRow>{category} </StyledItemOfRow>
            <StyledItemOfRow>{price} </StyledItemOfRow>
          </StyledRowContainer>
        ))}
      </StyledCartContainer>
    </CartContainer>
  )
}

export default Cart
