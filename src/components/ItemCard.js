import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { addToCart } from '../features/cartSlice'
import { removeFromInventory } from '../features/itemListSlice'
//#region  styled components
const StyledCard = styled('div')`
  border: 2px solid #2ec4b6;
  /* width: 150px;
  height: 180px; */
  width: 15rem;
  padding: 10px;
  margin: 15px;
  background-color: white;
  border-radius: 10px;

  :hover {
    cursor: pointer;
    border: 3px solid #ff9f1c;
  }
  color: black;
`
const StyledImageWrapper = styled('div')`
  width: 100%;
  height: 45%;
  border-bottom: 1px solid gray;
  padding: 5px;
`
const StyledImage = styled('img')`
  object-fit: contain;
  width: 100%;
  height: 100%;
`

const StyledInfoWrapper = styled('div')`
  font-size: 0.8rem;
  height: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const StyledItemName = styled('div')`
  margin-top: 3px;
  font-weight: bold;
`
const StyledItemQty = styled('div')`
  margin-top: 3px;
  color: grey;
  //in case we want to change class correpsonding to a prop
  /* text-decoration: ${props =>
    props.isAvailable ? 'initial' : 'line-through'}; */
`
const StyledItemCategory = styled('div')`
  margin-top: 3px;
  color: grey;
`
// const StyledItemQty = styled('div')``
const StyledFunctionsWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 5px;
`
const StyledDropown = styled('input')`
  width: 30%;
`
const StyledBuyButton = styled('button')`
  /* width: 10%; */
`
//#endregion

const ItemCard = props => {
  const dispatch = useDispatch()
  const addToCartHandler = () => {
    dispatch(removeFromInventory(props))
    dispatch(addToCart(props))
  }

  return (
    <StyledCard>
      <StyledImageWrapper>
        <StyledImage src={props.image} />
      </StyledImageWrapper>
      <StyledInfoWrapper>
        <StyledItemName>{props.title}</StyledItemName>
        <StyledItemQty isAvailable={props.quantity !== 0}>
          {props.quantity !== 0
            ? `Left in stock : ${props.quantity}`
            : `Sorry temporary out of stock`}
          {/* Left in stock : {props.quantity} */}
        </StyledItemQty>
        <StyledItemCategory>Category : {props.category}</StyledItemCategory>
        {/* <StyledItemQty >Left in stock : {props.}</StyledItemQty> */}
        <StyledFunctionsWrapper>
          <StyledDropown />
          <StyledBuyButton
            // isAvailable={props.quantity === 0}
            disabled={props.quantity === 0}
            onClick={() => {
              addToCartHandler(props)
            }}
          >
            Add to cart
          </StyledBuyButton>
        </StyledFunctionsWrapper>
      </StyledInfoWrapper>
    </StyledCard>
  )
}

export default ItemCard
