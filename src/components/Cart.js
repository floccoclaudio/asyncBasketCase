import { useSelector } from 'react-redux'
import styled from 'styled-components'
import React from 'react'
//#region styled components
const CartContainer = styled('div')`
  border-radius: 10px;
  width: 100%;
  background-color: white;
  border: 2px solid #2ec4b6;
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
  grid-template-columns: auto 15% 15% 15%;
  border-bottom: 1px solid black;
  & > * {
    &:not(:first-child) {
      border-left: 1px solid black;
    }
  }
`
const StyledRowContainer = styled('div')`
  display: grid;
  grid-template-columns: auto 15% 15% 15%;
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
  display: flex;
  justify-content: space-between;
`
const StyledSpan = styled('span')``
const StyledExtraAddButton = styled('button')`
  border-radius: 50%;
`
const StyledTotalBoxContainer = styled(`div`)`
  display: flex;
  justify-content: flex-end;
`
const StyledTotalSpan = styled('span')`
  border: 3px solid #2ec4b6;
  margin: 8px 20px 15px;
  padding: 10px 20px;
  border-radius: 10px;
`
//#endregion

const Cart = () => {
  const cartItems = useSelector(state => state.cartData.currentCart)
  const totalPrice = cartItems.reduce(
    (accumulator, current) => accumulator + current.price * current.quantity,
    0,
  )

  return (
    <CartContainer>
      <StyledTitle>Your cart contains:</StyledTitle>
      <StyledCartContainer>
        <StyledHeaderRow>
          <StyledItemOfRow>Type </StyledItemOfRow>
          <StyledItemOfRow>Qty</StyledItemOfRow>
          <StyledItemOfRow>Category </StyledItemOfRow>
          <StyledItemOfRow>Price </StyledItemOfRow>
        </StyledHeaderRow>

        {cartItems.map(({ title, category, price, id, quantity }) => (
          <StyledRowContainer key={id}>
            <StyledItemOfRow>{title} </StyledItemOfRow>
            <StyledItemOfRow>
              {quantity}
              <StyledSpan>
                <StyledExtraAddButton>+</StyledExtraAddButton>
              </StyledSpan>
            </StyledItemOfRow>
            <StyledItemOfRow>{category} </StyledItemOfRow>
            <StyledItemOfRow>$: {price * quantity} </StyledItemOfRow>
          </StyledRowContainer>
        ))}
      </StyledCartContainer>
      <StyledTotalBoxContainer>
        <StyledTotalSpan>
          Your CurrenT total is : $ {totalPrice}
        </StyledTotalSpan>
      </StyledTotalBoxContainer>
    </CartContainer>
  )
}

export default Cart
