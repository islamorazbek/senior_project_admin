import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { authApi } from './services/auth'
// Or from '@reduxjs/toolkit/query/react'
// import { setupListeners } from '@reduxjs/toolkit/query'
import { orderApi } from './services/order'
import { portApi } from './services/port';
import { priceApi } from './services/price';
import { profileApi } from './services/profile';
import auth from './slices/authSlice';

const rootReducer = combineReducers({
  auth,
  [authApi.reducerPath]: authApi.reducer,
  [orderApi.reducerPath]: orderApi.reducer,
  [portApi.reducerPath]: portApi.reducer,
  [priceApi.reducerPath]: priceApi.reducer,
  [profileApi.reducerPath]: profileApi.reducer
})

export const store = configureStore({
  reducer: rootReducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(orderApi.middleware, authApi.middleware, portApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector