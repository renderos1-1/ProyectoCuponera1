import React from 'react'

const CreateEmployee = ({addEmployee}) => {

    const [employee, setEmployee] = useState({
        name:"",
        lastName:"",
        email:"",
    });

    const handleChange = (e) =>{
        setEmployee({...employee, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!employee.name ||!employee.lastName|| !employee.email) return;
        addEmployee(employee);
        setEmployee({name:"", lastName:"", email:""})
    }

    return (
        <div className='bg-white p-6 rounded-md shadow-md'>
            <h2 className='text-xl font-bold mb-4'>Registrar Empleado</h2>

            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <input type="text" placeholder='Nombre' value={employee.name} onChange={handleChange} className='border p-2 rounded' />
                <input type="text" placeholder='Apellido' value={employee.lastName} onChange={handleChange} className='border p-2 rounded' />
                <input type="email" placeholder='Correo Electronico' value={employee.email} onChange={handleChange} className='border p-2 rounded' />

                <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>Registrar Empleado</button>
            </form>

        </div>
    );
};

export default CreateEmployee
