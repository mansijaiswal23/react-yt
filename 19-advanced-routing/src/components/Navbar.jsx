import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex px-10 py-4 bg-cyan-900 items-center justify-between'>
      <h2 className='text-2xl font-medium'>Sheriyans</h2>
      <div className='flex gap-10'>
        <Link className='text-lg font-medium' to='/'>Home</Link>
        <Link className='text-lg font-medium' to='/about-us'>About</Link>
        <Link className='text-lg font-medium' to='/product'>Product</Link>
        <Link className='text-lg font-medium' to='/courses'>Courses</Link>
        </div>
    </div>
  )
}

export default Navbar
