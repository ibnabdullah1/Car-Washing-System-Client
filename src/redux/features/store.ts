import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { baseApi } from "../api/baseApi";
import authReducer from "./auth/authSlice";
import bookingReducer from "./booking/bookingSlice";

const persistConfig = {
  key: "auth",
  storage,
};
const bookingPersistConfig = {
  key: "booking",
  storage,
};
const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedBookingReducer = persistReducer(
  bookingPersistConfig,
  bookingReducer
);
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistedAuthReducer,
    booking: persistedBookingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
