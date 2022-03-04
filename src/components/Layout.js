import Header from './Header'
import Card from './Card'
import Cart from './Cart'
import './Layout.css'
import { useSelector } from 'react-redux'

const Layout = () => {
  const showCart = useSelector((state) => state.cart.showCart)
  const itemsList = useSelector((state) => state.cart.itemsList)

  let totalPrice = 0

  itemsList.forEach((item) => {
    totalPrice += item.totalPrice
  })

  return (
    <>
      <Header />
      {!showCart ? (
        <section className='product-section'>
          <Card id='1' name='Apple' price={200} />
          <Card id='2' name='Lenovo' price={100} />
          <Card id='3' name='Asus' price={150} />
          <Card id='4' name='HP' price={120} />
          <Card id='5' name='Dell' price={120} />
        </section>
      ) : (
        <Cart />
      )}

      <div className='subtotal'>
        <h3>Total: ${totalPrice}</h3>
        <button className='place-order-btn'>Place Order</button>
      </div>
    </>
  )
}

export default Layout
