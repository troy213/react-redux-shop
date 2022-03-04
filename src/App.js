import './App.css'
import Auth from './components/Auth'
import Layout from './components/Layout'
import { useSelector } from 'react-redux'

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  // const itemsList = useSelector((state) => state.cart.itemsList)

  // console.log(itemsList)
  return (
    <div className='container'>
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  )
}

export default App
