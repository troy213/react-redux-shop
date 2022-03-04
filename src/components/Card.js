import './Card.css'
import laptop from '../assets/laptop.png'
import { useDispatch } from 'react-redux'
import { cartActions } from '../store/cart-slice'

const Card = ({ name, id, price }) => {
  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(cartActions.addToCart({ name, id, price }))
  }

  return (
    <div className='card'>
      <img src={laptop} alt='product' />
      <div className='card-description'>
        <h3>{name}</h3>
        <p>$ {price}</p>
        <button className='add-to-cart-btn' onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default Card
