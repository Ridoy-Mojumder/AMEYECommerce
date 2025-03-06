import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./features/counter/counterSlice";
import { quotesApiSlice } from "./features/quotes/quotesApiSlice";
import wishlistProductCounterReducer from "./features/WishlistProductCounter/WishlistProductCounterSlice";
import selectedSlice from "./features/selected/selectedSlice"
import addToCartCounterReducer from "./features/AddToCartCounter/AddToCartCounterSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterSlice.reducer,
      quotesApi: quotesApiSlice.reducer,
      wishlistProduct: wishlistProductCounterReducer,
      selected: selectedSlice,
      addToCart: addToCartCounterReducer
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(quotesApiSlice.middleware);
    },
    
  });
};


export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
