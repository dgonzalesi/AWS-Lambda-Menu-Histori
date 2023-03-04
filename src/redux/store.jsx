/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit'
// import { setupListeners } from '@reduxjs/toolkit/query'
import { menuApi } from './menu'
import { orderApi } from './orders'
import { userApi } from './user'

export default configureStore({
  reducer: {
    [menuApi.reducerPath]: menuApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [userApi.reducerPath]: userApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(menuApi.middleware
    ).concat(orderApi.middleware).concat(userApi.middleware)
})
