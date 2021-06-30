import { combineReducers } from '@reduxjs/toolkit'
import itemSliceReducers from '../features/itemListSlice'
import cartSliceReducers from '../features/cartSlice'
const rootReducers = combineReducers({
  itemsData: itemSliceReducers,
  cartData: cartSliceReducers,
})

export default rootReducers
