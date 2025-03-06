import { IProduct } from "@/assets/product-data";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface addToCart {
  items: IProduct[];
  count: number;
}

const initialState: addToCart = {
  items: [],
  count: 0,
};

const AddToCartCounterSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const exists = state.items.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
      state.count += 1;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.count -= 1;
    },
    clearCart: (state) => {
      state.items = [];
      state.count = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } =
  AddToCartCounterSlice.actions;
export default AddToCartCounterSlice.reducer;
