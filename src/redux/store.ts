import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { analyticsApi } from './services/analyticsApi';
import { blogsApi } from './services/blogs';
// Or from '@reduxjs/toolkit/query/react'
// import { setupListeners } from '@reduxjs/toolkit/query'
import { orderApi } from './services/order'
import { portApi } from './services/port';
import { priceApi } from './services/price';
import { profileApi } from './services/profile';
import auth from './auth/auth.slice';

const rootReducer = combineReducers({
  auth,
  [orderApi.reducerPath]: orderApi.reducer,
  [portApi.reducerPath]: portApi.reducer,
  [priceApi.reducerPath]: priceApi.reducer,
  [profileApi.reducerPath]: profileApi.reducer,
  [blogsApi.reducerPath]: blogsApi.reducer,
  [analyticsApi.reducerPath]: analyticsApi.reducer
})

export const store = configureStore({
  reducer: rootReducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      orderApi.middleware,
      portApi.middleware,
      blogsApi.middleware,
      profileApi.middleware,
      priceApi.middleware,
      analyticsApi.middleware
    ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector