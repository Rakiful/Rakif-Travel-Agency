import React from 'react'
import logo from '../../../assets/image/logo.png'

export const Footer = () => {
  return (
    <div className='bg-blue-950 py-10'>
      <div className='container mx-auto'>
        <div className='flex justify-center'>
              <div className='flex cursor-pointer'>
                  <img className='w-16' src={logo} alt="web-logo" />
                  <div>
                      <h1 className='text-3xl font-semibold ms-3 text-white'>RAKIF</h1>
                      <p className='ms-3 text-white'>Travel Agency</p>
                  </div>
              </div>
        </div>
        <div className='flex justify-center'>
        <p className='text-gray-400 text-center w-2/6 mt-5'>For travelers who expect more, 1000 Mile Travel Vacations specialize in designing tailored vacation and travel experiences to make your travel dreams a reality.</p>
        </div>
        <hr className='bg-gray-400 h-1 mx-auto mt-5' />
        <div className='text-gray-400 text-center my-5'>
            <p>Copyright &copy; Rakif Travel Agency</p>
            <p>All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}