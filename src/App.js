import './App.css'
import { useState } from 'react'
import Section from './components/Section/Section'
import ProductsList from './components/ProductList/ProductList'
import Button from './components/Button/Button'
import Modal from './components/Modal/Modal'

function App() {
  const [open, setOpen] = useState(false)
  const openModal = () => {
    setOpen(true)
  }
  const closeModal = () => {
    setOpen(false)
  }
  console.log(open)

  return (
    <div className="App">
      <Section title="Products">
        <Button type="button" title="Add product" openModal={openModal} />
        <ProductsList />
        {open && <Modal closeModal={closeModal} />}
      </Section>
    </div>
  )
}

export default App
