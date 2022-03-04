import React from 'react'
import './Auth.css'
import { useDispatch } from 'react-redux'
import { authActions } from '../store/auth-slice'

const Auth = () => {
  const dipatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dipatch(authActions.login())
  }

  return (
    <div className='form-container'>
      <form className='form' onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' />
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' />
        <button type='submit' className='login-btn'>
          Log In
        </button>
      </form>
    </div>
  )
}

export default Auth
