import React from "react";

export const CardSection = ({bookedTourData,handleTourStart}) => {
  return (
    <div className="h-90">
        <div className="">
            <div className='text-center mt-32'>
                <h1 className='text-2xl font-bold text-blue-950'>Seleted Packages</h1>
                <div>
                    <hr className='h-1 mx-auto mt-3 w-40 bg-blue-950' />
                </div>
            </div>
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-6">
                <thead>
                <tr>
                    <th className="py-2 px-4 border-b">Name</th>
                    <th className="py-2 px-4 border-b">Price</th>
                    <th className="py-2 px-4 border-b">Ratings</th>
                    <th className="py-2 px-4 border-b">Action</th>
                </tr>
                </thead>
                <tbody>
                {bookedTourData.map((btd) => (
                        <tr key={btd.place_id}>
                            <td className="py-2 px-4 border-b">{btd.place_name}</td>
                            <td className="py-2 px-4 border-b">${btd.package_price}</td>
                            <td className="py-2 px-4 border-b">{btd.place_popularity}</td>
                            <td className="py-2 px-4 border-b">
                                <button onClick={()=>handleTourStart(btd)} className="bg-blue-950 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Tour Start</button>
                            </td>
                        </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};
