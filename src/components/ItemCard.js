import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { addToCart } from '../features/cartSlice'
//#region  styled components
const StyledCard = styled('div')`
  border: 2px solid white;
  /* width: 150px;
  height: 180px; */
  width: 15rem;
  padding: 10px;
  margin: 15px;
  background-color: white;
  border-radius: 10px;
  border: 0.5px solid grey;
  :hover {
    cursor: pointer;
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
const StyledItemCode = styled('div')`
  margin-top: 3px;
  color: grey;
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
    // dispatch(addToCart(item))
    dispatch(addToCart(props))
  }
  return (
    <StyledCard>
      <StyledImageWrapper>
        <StyledImage src={props.image} />
      </StyledImageWrapper>
      <StyledInfoWrapper>
        <StyledItemName>{props.title}</StyledItemName>
        <StyledItemCode>Item Code : {props.id}</StyledItemCode>
        <StyledItemCategory>Category : {props.category}</StyledItemCategory>
        {/* <StyledItemQty >Left in stock : {props.}</StyledItemQty> */}
        <StyledFunctionsWrapper>
          <StyledDropown />
          <StyledBuyButton
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
