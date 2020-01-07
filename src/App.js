import React from 'react'
import './App.css'

import useFormValidation from './useFormValidation'
import validateAuth from './validateAuth'

const INITIAL_STATE = {
  email: '',
  password: ''
}

function Register () {
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    isSubmitting,
    values
  } = useFormValidation(INITIAL_STATE, validateAuth)

  if (!isSubmitting) {
    return (
      <div className='container'>
        <h1>Register Here</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            name='email'
            className={errors.email && 'error-input'}
            value={values.email}
            autoComplete='off'
            placeholder='Your email address'
          />
          {errors.email && <p className='error-text'>{errors.email}</p>}
          <input
            onChange={handleChange}
            value={values.password}
            onBlur={handleBlur}
            className={errors.password && 'error-input'}
            name='password'
            type='password'
            autoComplete='off'
            placeholder='Choose a safe password'
          />
          {errors.password && <p className='error-text'>{errors.password}</p>}
          <div>
            <button disabled={isSubmitting} type='submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  } else {
    return <h1>Welcome user {values.email}</h1>
  }
}
export default Register
