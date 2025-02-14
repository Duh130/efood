import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Restaurantes } from '../../pages/Home';

type CartState = {
  items: Restaurantes[];
  isOpen: boolean;
};

const initialState: CartState = {
  items: [],
  isOpen: false
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Restaurantes>) => {
      const produto = state.items.find(
        (item) => item.cardapio.id === action.payload.id
      );
      if (!produto) {
        state.items.push(action.payload);
      } else {
        alert('O produto já está no carrinho!');
      }
    },
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    }
  }
});

export const { add, open, close, remove } = cartSlice.actions;
export default cartSlice.reducer;
