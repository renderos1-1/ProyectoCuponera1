import React from 'react'

const EmployessPage = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold mb-4'>Empleados</h2>

            <div className='bg-white p-4 shadow-md rounded-md'>
                <ul className='space-y-2'>
                    <li className='flex justify-between border-b pb-2'>
                        <span>Taylor Swift</span>
                        <div className='space-x-2'>
                            <button className="text-yellow-500">✏️</button>
                            <button className="text-red-500">🗑️</button>
                        </div>
                    </li>
                </ul>

            </div>

        </div>
    )
}

export default EmployessPage
