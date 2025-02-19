import React from 'react'

const LandingPage = () => {
    return (
        <div className='bg-white shadow-md p-6 rounded-md'>
            <h1 className='text-2xl font-bold'>¡Bienvenido!</h1>
            <p className='text-gray-600'>Administra tus empleados y ofertas fácilmente.</p>

            <div className='mt-6 flex gap-4'>
                <Link to="/company-admin/crear-empleado">
                    <button className='bg-blue-500 text-white px-4 py-2 rounded'>Crear Empleado</button>
                </Link>

                <Link to="/company-admin/crear-oferta">
                    <button className='bg-blue-500 text-white px-4 py-2 rounded'>Crear Ofertas</button>
                </Link>
            </div>

        </div>
    )
}

export default LandingPage;
