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

const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["items"],
};

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: persistReducer(cartPersistConfig, cartReducer),
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
