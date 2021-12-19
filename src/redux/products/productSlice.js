import { addProduct, deleteProducts, fetchProducts } from './productOperations'
import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'Products',
  initialState: {
    products: [],
    isLoading: false,
    error: null,
  },
  // reducers: {
  //   changeFilter: (state, action) => {
  //     state.filter = action.payload
  //   },
  // },
  extraReducers: {
    [fetchProducts.fulfilled](state, action) {
      state.products = action.payload
      state.isLoading = false
      state.error = null
    },
    [fetchProducts.pending](state) {
      state.isLoading = true
      state.error = null
    },
    [fetchProducts.rejected](state, action) {
      state.isLoading = false
      state.error = action.payload
      console.log(action.payload)
    },

    [addProduct.fulfilled](state, action) {
      state.products.push(action.payload)
      state.isLoading = false
      state.error = null
    },
    [addProduct.pending](state) {
      state.isLoading = true
      state.error = null
    },
    [addProduct.rejected](state, action) {
      state.isLoading = false
      state.error = action.payload
      console.log(action.payload)
    },

    [deleteProducts.fulfilled](state, action) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload,
      )
      state.isLoading = false
      state.error = null
    },
    [deleteProducts.pending](state) {
      state.isLoading = true
      state.error = null
    },
    [deleteProducts.rejected](state, action) {
      state.isLoading = false
      state.error = action.payload
      console.log(action.payload)
    },
  },
})
export default productSlice.reducer
// export const { changeFilter } = productSlice.actions
