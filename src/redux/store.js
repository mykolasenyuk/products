import thunk from 'redux-thunk'

import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit'
import logger from 'redux-logger'

import { productsSlice } from './products'

const middleware = [...getDefaultMiddleware(), thunk, logger]

const rootReducer = combineReducers({
  products: productsSlice,
})

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
})

export default { store }
