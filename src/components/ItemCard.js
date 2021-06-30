import React from 'react'
import styled from 'styled-components'

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
` //object-fit
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

const ItemCard = props => {
  return (
    <StyledCard>
      <StyledImageWrapper>
        <StyledImage src={props.image} />
      </StyledImageWrapper>

      {/*
    <StyledInfoWrapper >
    <StyledItemName />
    <StyledItemCode/>
    <StyledItemQty/>
    <StyledFunctionsWrapper>
    <StyledDropown />
    <StyledButton />
    </StyledFunctionsWrapper>
    </StyledInfoWrapper>
     */}
    </StyledCard>
  )
}

export default ItemCard
