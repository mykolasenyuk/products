import { createAsyncThunk } from '@reduxjs/toolkit'

import * as productsApi from '../../service/Api'

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const products = await productsApi.fetchProducts()
      return products
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (product, { rejectWithValue }) => {
    try {
      const res = await productsApi.addProduct(product)

      return res.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)

export const deleteProducts = createAsyncThunk(
  'products/deleteProducts',
  async (id, { rejectWithValue }) => {
    try {
      await productsApi.dltProduct(id)
      // console.log(id);

      return id
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)
