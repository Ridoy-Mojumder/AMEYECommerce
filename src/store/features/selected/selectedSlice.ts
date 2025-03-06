import { createSlice } from "@reduxjs/toolkit";

interface WishlistState {
  selectedItems: string[];
}

const initialState: WishlistState = {
  selectedItems: [],
};

const selectedSlice = createSlice({
  name: "selected",
  initialState,
  reducers: {
    toggleSelected: (state, action) => {
      const itemId = action.payload;
      if (state.selectedItems.includes(itemId)) {
        state.selectedItems = state.selectedItems.filter((id) => id !== itemId);
      } else {
        state.selectedItems.push(itemId);
      }
    },
    setSelectedFalse: (state, action) => {
        const itemId = action.payload;
        state.selectedItems = state.selectedItems.filter((id) => id !== itemId);
    },
  },
});

export const { toggleSelected, setSelectedFalse } = selectedSlice.actions;
export default selectedSlice.reducer;
