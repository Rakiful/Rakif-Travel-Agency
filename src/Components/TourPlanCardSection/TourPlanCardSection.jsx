import React from 'react'

export const TourPlanCardSection = ({tourPlan}) => {
  return (
    <div className="">
        <div className="">
            <div className='text-center mt-32'>
                <h1 className='text-2xl font-bold text-blue-950'>Tour Plan</h1>
                <div>
                    <hr className='h-1 mx-auto mt-3 w-40 bg-blue-950' />
                </div>
            </div>
            <div>
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-6">
                <thead>
                <tr>
                    <th className="py-2 px-4 border-b">Name</th>
                    <th className="py-2 px-4 border-b">Duration</th>
                    <th className="py-2 px-4 border-b">Price</th>
                    <th className="py-2 px-4 border-b">Max People</th>
                </tr>
                </thead>
                <tbody>
                {tourPlan.map((tp) => (
                        <tr key={tp.place_id}>
                            <td className="py-2 px-4 border-b">{tp.place_name}</td>
                            <td className="py-2 px-4 border-b">{tp.package_duration}</td>
                            <td className="py-2 px-4 border-b">${tp.package_price}</td>
                            <td className="py-2 px-4 border-b text-center">{tp.person_allow}</td>
                        </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
    </div>
  )
}
