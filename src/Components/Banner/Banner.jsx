import React from 'react'
import './Banner.css'
// import banner_bg from '../../assets/image/banner-bg.jpg'

export const Banner = () => {
  return (
    <div className='banner-background'>
        <div className='container mx-auto'>
            <h1 className='text-7xl font-bold w-3/6'>Turning travel dreams into reality</h1>
            <p className='w-2/6 mt-5 font-semibold'>For travelers who expect more, 1000 Mile Travel Vacations specialize in designing tailored vacation and travel experiences to make your travel dreams a reality.</p>
            <div className='mt-5'>
                <button className='bg-white text-blue-950 px-5 py-1 me-5 rounded-lg text-2xl border-4 border-transparent hover:border-blue-950'>Book Now</button>
                <button className='bg-blue-950 px-5 py-1 me-5 rounded-lg text-2xl border-4 border-transparent hover:border-white'>Feedback</button>
            </div>
        </div>
    </div>
  )
}
