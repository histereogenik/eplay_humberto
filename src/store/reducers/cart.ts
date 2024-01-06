import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../pages/Home'

type CartState = {
  items: Game[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Game>) => {
      state.items.push(action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, close, open } = CartSlice.actions
export default CartSlice.reducer
