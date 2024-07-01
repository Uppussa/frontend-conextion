import React from 'react'
import { Link } from 'react-router-dom'

const LinkRegister = () => {
  return (
    <>
      <p className="mt-8 text-center text-sm text-gray-600">
        Don`t have an account yet?  <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">Register</Link>
      </p>
    </>
  )
}

export default LinkRegister
