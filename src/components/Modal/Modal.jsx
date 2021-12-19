import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import s from './Modal.module.css'
import { useState } from 'react'
import { v4 } from 'uuid'
import { addProduct } from '../../service/Api'
import { useDispatch } from 'react-redux'

const ModalRoot = document.querySelector('#modal-root')

export default function Modal({ closeModal }) {
  const dispatch = useDispatch()
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  })

  const handleKeyPress = (e) => {
    if (e.code !== 'Escape') {
      return
    }
    closeModal()
  }

  const handleBackdropClick = (e) => {
    if (e.target !== e.currentTarget) {
      return
    }
    closeModal()
  }
  const [name, setName] = useState('')
  const [imageUrl, setImage] = useState('')
  const [count, setCount] = useState('')
  const [weight, setWeight] = useState('')
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')

  const nameInputId = v4()
  const imageInputId = v4()
  const countInputId = v4()
  const weightInputId = v4()
  const widthInputId = v4()
  const heightInputId = v4()

  const onInputChange = (e) => {
    const { name, value } = e.currentTarget

    switch (name) {
      case 'name':
        setName(value)
        break
      case 'imageUrl':
        setImage(value)
        break
      case 'count':
        setCount(value)
        break
      case 'weight':
        setWeight(value)
        break
      case 'width':
        setWidth(value)
        break
      case 'height':
        setHeight(value)
        break

      default:
        break
    }
  }

  const submit = (e) => {
    e.preventDefault()
    dispatch(
      addProduct({
        name,
        imageUrl,
        count,
        weight,
        size: { width: width, height: height },
      }),
    )
    reset()
  }
  const reset = () => {
    setName('')
    setImage('')
    setCount('')
    setWeight('')
    setWidth('')
    setHeight('')
  }

  return createPortal(
    <div
      className={s.Overlay}
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div className={s.Modal}>
        <button
          className={s.closeBtn}
          type="button"
          onClick={() => closeModal()}
        >
          Close
        </button>
        <form onSubmit={submit}>
          <h3 className={s.modalTitle}>Add new product</h3>
          <div className={s.formField}>
            <label className={s.formLabel} htmlFor={nameInputId}>
              <input
                className={s.formInput}
                placeholder="Name"
                id={nameInputId}
                type="text"
                name="name"
                value={name}
                required
                onChange={onInputChange}
              />
            </label>
            <label className={s.formLabel} htmlFor={imageInputId}>
              <input
                className={s.formInput}
                placeholder="Image"
                id={imageInputId}
                type="text"
                name="imageUrl"
                value={imageUrl}
                required
                onChange={onInputChange}
              />
            </label>
            <label className={s.formLabel} htmlFor={countInputId}>
              <input
                className={s.formInput}
                placeholder="Count"
                id={countInputId}
                type="text"
                name="count"
                value={count}
                required
                onChange={onInputChange}
              />
            </label>

            <label className={s.formLabel} htmlFor={weightInputId}>
              <input
                className={s.formInput}
                placeholder="Weight"
                id={weightInputId}
                type="text"
                name="weight"
                value={weight}
                required
                onChange={onInputChange}
              />
            </label>
            <label className={s.formLabel} htmlFor={widthInputId}>
              <input
                className={s.formInput}
                placeholder="Width"
                id={widthInputId}
                type="text"
                name="width"
                value={width}
                required
                onChange={onInputChange}
              />
            </label>
            <label className={s.formLabel} htmlFor={heightInputId}>
              <input
                className={s.formInput}
                placeholder="Height"
                id={heightInputId}
                type="text"
                name="height"
                value={height}
                required
                onChange={onInputChange}
              />
            </label>
          </div>

          <button className={s.btn} type="submit">
            Confirm
          </button>
          <button className={s.btn} onClick={() => reset()} type="reset">
            Cancel
          </button>
        </form>
      </div>
    </div>,
    ModalRoot,
  )
}
