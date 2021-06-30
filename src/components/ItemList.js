import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import styled from 'styled-components'
import { fetchItemsList } from '../features/itemListSlice'

import Container from './Container'
import ItemCard from './ItemCard'
//#region  styled components

//#endregion
const ItemList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchItemsList())
  }, [dispatch])

  const inventory = useSelector(state => state.itemsData.inventory)

  return (
    <>
      {inventory && (
        <Container>
          {inventory.map(props => {
            return <ItemCard {...props} key={props.id} />
          })}
        </Container>
      )}
      {/* <StyledButton /> */}
    </>
  )
}

export default ItemList
