import React from 'react'

export const Package = ({pkg,handleSelectPlace}) => {
  const {place_name,place_image,place_details,package_duration,package_price,person_allow,place_popularity} = pkg;
  
  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs mx-auto">
        <img src={place_image} alt={place_name} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800">{place_name}</h2>
          <p className="text-gray-600 mt-2 h-16">{place_details}</p>
          <ul className="mt-4 space-y-2">
            <li className="text-gray-700"><strong>Popularity:</strong> {place_popularity}</li>
            <li className="text-gray-700"><strong>Visited times:</strong> {package_duration}</li>
            <li className="text-gray-700"><strong>Price:</strong> ${package_price}</li>
            <li className="text-gray-700"><strong>Max People:</strong> {person_allow}</li>
          </ul>
           <button onClick={()=>handleSelectPlace(pkg)} className='bg-blue-950 px-5 py-2 mt-4 rounded-lg text-white text-1xl hover:bg-blue-700'>Book Now</button>
          </div>
      </div>
    </div>
  )
}