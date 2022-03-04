import { useDispatch } from 'react-redux'
import { cartActions } from '../store/cart-slice'
import './CartItem.css'

const CartItem = ({ id, name, quantity, price, totalPrice }) => {
  const dispatch = useDispatch()

  const incrementItem = () => {
    dispatch(cartActions.addToCart({ id, name, price }))
  }

  const decrementItem = () => {
    dispatch(cartActions.removeFromCart(id))
  }
  return (
    <div className='cart-item'>
      <h3>{name}</h3>
      <p>x{quantity}</p>
      <p>${totalPrice}</p>
      <div className='cart-button-container'>
        <button onClick={decrementItem}>-</button>
        <button onClick={incrementItem}>+</button>
      </div>
    </div>
  )
}

export default CartItem
