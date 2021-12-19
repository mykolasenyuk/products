import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProducts } from '../../redux/products/productSelectors'
import {
  fetchProducts,
  deleteProducts,
} from '../../redux/products/productOperations'
import s from './Productllist.module.css'
const ProductsList = () => {
  const products = useSelector(getProducts)
  console.log(products)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  // const onDeleteContact = id => dispatch(contactsOperations.deleteContacts(id));

  return (
    <ul className={s.list}>
      {products.map(({ id, name, imageUrl, count, size, weight, comments }) => (
        <li key={id} className={s.card}>
          <div>
            <img className={s.card__image} src={imageUrl} alt={name}></img>
          </div>
          <div className={s.card__content}>
            <h2 className={s.card__name}>{name}</h2>
            <p className={s.card__price}>Price:{count}</p>
            <p className={s.card__price}>
              Size:{size.width}'x'{size.height}
            </p>
            <p className={s.card__price}>Weight:{weight}</p>
            <ul>
              {comments &&
                comments.map(({ id, description, date }) => (
                  <li key={id}>
                    <p>Comments: {description}</p>
                    <p>Date: {date}</p>
                  </li>
                ))}
            </ul>
          </div>
          <button
            className={s.deleteBtn}
            type="button"
            onClick={() => dispatch(deleteProducts(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ProductsList
