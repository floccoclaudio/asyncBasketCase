import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const initialInventoryState = {
  inventory: [],
  isItemsLoading: false,
  isItemsError: false,
  isItemsSuccess: false,
}
//commento extra
export const fetchItemsList = createAsyncThunk(
  'itemsList/fetchItems',
  async function fetchItemsList() {
    let response = await fetch('https://fakestoreapi.com/products/')
    response = await response.json()
    response.forEach(function (itm) {
      itm.quantity = Math.floor(Math.random() * 10)
    })
    return response
  },
)

const itemsListSlice = createSlice({
  name: 'inventory',
  initialState: initialInventoryState,
  reducers: {
    removeFromInventory: (state, action) => {
      const selectedItem = state.inventory.find(
        item => item.id === action.payload.id,
      )
      selectedItem.quantity--
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchItemsList.pending, state => {
        state.isItemsLoading = true
      })
      .addCase(fetchItemsList.fulfilled, (state, action) => {
        state.isItemsLoading = false
        state.isItemsSuccess = true
        state.inventory = action.payload
      })
      .addCase(fetchItemsList, state => {
        state.isItemsLoading = false
        state.isItemsError = true
      })
  },
})

export const { removeFromInventory } = itemsListSlice.actions
export default itemsListSlice.reducer
