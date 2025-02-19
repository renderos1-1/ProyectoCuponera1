import React, { useState } from 'react'

const useEmployees = () => {

    const [employees, setEmployees] = useState([]);

    const addEmployee = (newEmployee) => {
        setEmployees([...employees, { id: employees.length + 1, ...newEmployee }]);
    };

    return {employees, addEmployee};
};

export default useEmployees
