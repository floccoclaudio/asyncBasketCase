import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    currentCart: [],
  },
  reducers: {
    addToCart(state, action) {
      const isAlreadyInIndex = state.currentCart.findIndex(
        item => item.id === action.payload.id,
      )

      if (isAlreadyInIndex === -1) {
        state.currentCart = [
          ...state.currentCart,
          { ...action.payload, quantity: 1 },
        ]
      } else {
        state.currentCart[isAlreadyInIndex].quantity += 1
      }
    },
  },
})
export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
