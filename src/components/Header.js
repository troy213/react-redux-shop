import './Header.css'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../store/auth-slice'
import { cartActions } from '../store/cart-slice'

const Header = () => {
  const dispatch = useDispatch()
  const totalQuantity = useSelector((state) => state.cart.totalQuantity)

  const logout = () => {
    dispatch(authActions.logout())
  }

  const showCart = () => {
    dispatch(cartActions.setShowCart())
  }

  const closeCart = () => {
    dispatch(cartActions.closeCart())
  }

  return (
    <nav>
      <h1 className='logo' onClick={closeCart}>
        React Redux Shop
      </h1>

      <div className='nav-list'>
        <button className='cart-btn' onClick={showCart}>
          Cart: {totalQuantity} Item{totalQuantity > 1 && 's'}
        </button>
        <button onClick={logout} className='logout-btn'>
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Header
