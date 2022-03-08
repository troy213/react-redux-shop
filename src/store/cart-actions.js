import { cartActions } from './cart-slice'
import { uiActions } from './ui-slice'

export const getCartData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await fetch(
        'https://redux-app-98d19-default-rtdb.firebaseio.com/cartItems.json'
      )
      const data = await res.json()
      if (data.itemsList) return data
    }

    try {
      const cartData = await fetchHandler()
      dispatch(cartActions.replaceData(cartData))
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          isOpen: true,
          message: 'sending request failed',
          type: 'error',
        })
      )
    }
  }
}

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        isOpen: true,
        message: 'sending request',
        type: 'warning',
      })
    )

    const sendRequest = async () => {
      const res = await fetch(
        'https://redux-app-98d19-default-rtdb.firebaseio.com/cartItems.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      )
      const data = await res.json()
      console.log(data)

      dispatch(
        uiActions.showNotification({
          isOpen: true,
          message: 'sent request to database successfully',
          type: 'success',
        })
      )
    }

    try {
      await sendRequest()
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          isOpen: true,
          message: 'sending request failed',
          type: 'error',
        })
      )
    }
  }
}
