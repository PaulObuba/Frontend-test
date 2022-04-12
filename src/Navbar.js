import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-gray-100'>
      <nav className='flex flex-row justify-between items-center w-52 py-5 font-bold mx-5 text-blue-400'>
          <Link className='hover:text-blue-800' to='/'>SignUp</Link>{' '}|{' '}
          <Link className='hover:text-blue-800' to='/Bills'>Bills</Link>{' '}|{' '}
          <Link className='hover:text-blue-800' to='/Reports'>Reports</Link>
      </nav>
    </div>
  )
}

export default Navbar;
