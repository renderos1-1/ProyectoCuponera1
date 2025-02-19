import React from 'react'

const OffersPage = () => {
  return (
    <div>
        <h2 className='text-2xl font-bold mb-4'>Mis ofertas</h2>

        <div className='bg-white p-4 shadow-md rounded-md'>
            <div className='flex justify-between border-b pb-2 mb-4'>
                <button className='text-blue-500'>En espera</button>
                <button className='text-green-500'>Aprobadas</button>
                <button className='text-gray-500'>Pasadas</button>
                <button className='text-red-500'>Rechazadas</button>
            </div>
        </div>
    </div>
  )
}

export default OffersPage
