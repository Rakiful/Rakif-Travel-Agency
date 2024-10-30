import React from 'react'
import './Header.css'
import logo from '../../../assets/image/logo.png'
import { FaSearch, FaUser } from 'react-icons/fa'

export const Header = () => {
  return (
    <div className='header my-2'>
        <div className='container mx-auto flex justify-between items-center'>
            <div className='flex cursor-pointer'>
                <img className='w-16' src={logo} alt="web-logo" />
                <div>
                    <h1 className='text-3xl font-semibold ms-3 text-blue-950'>RAKIF</h1>
                    <p className='ms-3'>Travel Agency</p>
                </div>
            </div>
            <div>
                <ul className='flex gap-10 text-2xl '>
                    <li className='cursor-pointer hover:text-blue-950 border-b-4 border-white hover:border-blue-950'>Home</li>
                    <li className='cursor-pointer hover:text-blue-950 border-b-4 border-white hover:border-blue-950'>Package</li>
                    <li className='cursor-pointer hover:text-blue-950 border-b-4 border-white hover:border-blue-950'>About</li>
                    <li className='cursor-pointer hover:text-blue-950 border-b-4 border-white hover:border-blue-950'>Clients</li>
                </ul>
            </div>
            <div className='flex'>
                <div className='flex'>
                    <input className='border border-black rounded-md text-2xl w-60 p-1' type="text" />
                    <div className='flex text-2xl cursor-pointer items-center search-icon'><FaSearch/></div>
                </div>
                <div className='flex text-2xl ms-10 items-center bg-gray-300 w-10 justify-center rounded-full cursor-pointer'>
                    <FaUser/>
                </div>
            </div>
        </div>
    </div>
  )
}
