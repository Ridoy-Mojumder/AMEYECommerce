import { IProduct } from "@/assets/product-data";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistState {
  count: number;
  items: IProduct[];
}

const initialState: WishlistState = {
  items: [],
  count: 0,
};

const WishlistProductCounterSlice = createSlice({
  name: "wishlistProduct",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<IProduct>) => {
      const exists = state.items.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
      state.count += 1;
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.count -= 1;
    },
    clearWishlist: (state) => {
      state.items = [];
      state.count = 0;
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  WishlistProductCounterSlice.actions;
export default WishlistProductCounterSlice.reducer;
