import CartItem from './CartItem'
import { useSelector } from 'react-redux'
import './Cart.css'

const Cart = () => {
  const itemsList = useSelector((state) => state.cart.itemsList)
  return (
    <div className='cart-container'>
      <h2>Cart</h2>
      {itemsList.length > 0 ? (
        <>
          {itemsList.map((item) => {
            const { id, name, quantity, price, totalPrice } = item
            return (
              <div key={id}>
                <CartItem
                  id={id}
                  name={name}
                  quantity={quantity}
                  price={price}
                  totalPrice={totalPrice}
                />
              </div>
            )
          })}
        </>
      ) : (
        <p className='text-center'>Cart is empty</p>
      )}
    </div>
  )
}

export default Cart
