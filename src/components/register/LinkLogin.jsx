import React from 'react'
import { Link } from 'react-router-dom'

const LinkLogin = () => {
  return (
    <>
      <p className="mt-8 text-center text-sm text-gray-600">
        Already a member?  <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Login</Link>
      </p>
    </>
  )
}

export default LinkLogin
