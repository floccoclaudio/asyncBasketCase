import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { fetchItemsList } from '../features/itemListSlice'
import Container from './Container'
import ItemCard from './ItemCard'
//#region  styled components
const StyledItemsPage = styled('div')`
  border: 2px solid black;
  color: white;
  width: 95vw;
  margin: 0 auto;
  padding: 2vh 5vh 0vh 5vh;
`
const StyledLogo = styled('div')`
  display: block;
  width: 5vw;
  height: 5vw;
  border: 1px solid white;
  margin: 0 auto;
`

const StyledAppSeparator = styled('div')`
  border-bottom: 1px solid white;
  width: 100%;
  margin: 5vh auto;
`

//#endregion
const ItemList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchItemsList())
  }, [dispatch])

  const inventory = useSelector(state => state.itemsData.inventory)

  return (
    <StyledItemsPage>
      <StyledLogo />
      <StyledAppSeparator />
      {inventory && (
        <Container>
          {inventory.map(props => {
            return <ItemCard {...props} />
          })}
        </Container>
      )}
    </StyledItemsPage>
  )
}

export default ItemList
