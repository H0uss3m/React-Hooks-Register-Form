import React, { useState, useEffect } from 'react'
function useFormValidation (initialState, validate) {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setSubmitting] = useState(false)
  useEffect(() => {
    console.log('isSubmitting', isSubmitting)
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0
      if (noErrors) {
        console.log('authenticated', values.email, values.password)
        setTimeout(() => {
          setSubmitting(false)  
        }, 3000)
      } else {
        setSubmitting(false)
      }
    }
  }, [errors])
  // handleChange function
  function handleChange (event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }
  // handleBlur function
  function handleBlur () {
    const validationErrors = validate(values)
    setErrors(validationErrors)
  }
  // handleSubmit function
  function handleSubmit (event) {
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    setSubmitting(true)
  }
  return {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    isSubmitting,
    values
  }
}

export default useFormValidation
