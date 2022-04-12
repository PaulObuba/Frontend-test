import React from 'react'
import { HiOutlineBell } from 'react-icons/hi';
import { HiChevronDown } from 'react-icons/hi';
import image from './image/Logo-Top.png';

const Header = () => {
  return (
    <div className='flex flex-row justify-between items-center px-10 mb-5'>
      <img src={image} alt='Logo' className='h-20' />
      <div className='flex flex-row justify-around items-center'>
          <p className='mx-2 p-1 border-2 border-gray-200 rounded-full'><HiOutlineBell /></p>
          <p className='mx-2 p-4 bg-gray-900 rounded-full'></p>
          <p className='mx-2 text-xs'>Ogoluwa</p>
          <p><HiChevronDown /></p>
      </div>
    </div>
  )
}

export default Header;
