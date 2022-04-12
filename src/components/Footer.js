import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-row justify-around items-center'>
          <a href='#' className='bg-green-500 hover:bg-green-600 text-white p-4 font-semibold text-lg rounded-lg'> Prev </a>
          <a href='#' className='bg-green-500 hover:bg-green-600 text-white p-4 font-semibold text-lg rounded-lg'> Next </a>
      </div>
    </div>
  )
}

export default Footer;
