import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categories/categoriesSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  PURGE,
  REHYDRATE,
  PAUSE,
  REGISTER,
  PERSIST,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import productsReducer from "./products/productsSlice";
import cartReducer from "./cart/cartSlice";
import wishlistReducer from "./wishlist/wishlistSlice";

const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["items"],
};
const wishlistPersistConfig = {
  key: "wishlist",
  storage,
  whitelist: ["itemsId"],
};

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: persistReducer(cartPersistConfig, cartReducer),
  wishlist: persistReducer(wishlistPersistConfig, wishlistReducer),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PURGE, REHYDRATE, PAUSE, REGISTER, PERSIST],
      },
    }),
});

const persistor = persistStore(store);

// Export types for the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
