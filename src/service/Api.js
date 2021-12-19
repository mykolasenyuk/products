import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3001'

export async function fetchProducts() {
  const { data } = await axios.get('/products')
  return data
}

export async function addProduct(product) {
  const { data } = await axios.post('/products', product)

  return data
}

export async function dltProduct(id) {
  await axios.delete(`/products/${id}`)
  return id
}
