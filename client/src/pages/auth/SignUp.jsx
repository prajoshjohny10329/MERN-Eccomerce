import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const initialState = {
  userName: '',
  email: '',
  password: ''
}

const SignUp = () => { 
  const [formData, setFormData] = useState(initialState)
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
      <h1 className="text-3xl font-bold -tracking-tight text-foreground">Create new Account</h1>
      <p className='mt-2 '>Already Have an Account</p>
      <Link className='font-medium ml-2 text-purple-500 hover:underline' to={'auth/login'}></Link>
      </div>
    </div>
  )
}

export default SignUp