import React from 'react'
import { Package } from '../Package/Package'

export const Packages = ({packageData,handleSelectPlace}) => {
    

  return (
    <div className='w-3/4'>
        <div className='container mx-auto py-10'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold text-blue-950'>Our Packages</h1>
                <div>
                    <hr className='h-1 mx-auto mt-3 w-80 bg-blue-950' />
                </div>
            </div>
            
            <div className='grid lg:grid-cols-3 md:grid-cols-2 my-10'>
                {packageData.map((pkg) => (
                    <div className='mb-8 gap-5' key={pkg.place_id}>
                        <Package pkg={pkg} handleSelectPlace={handleSelectPlace}/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
