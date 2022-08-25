import React, { useState } from 'react'
import Swal from 'sweetalert2';

function View({ employees, selectedEmployee, setEmployees, setIsViewing }) {

    const id = selectedEmployee.id;

    const [firstName, setFirstName] = useState(selectedEmployee.firstName);
    const [lastName, setLastName] = useState(selectedEmployee.lastName);
    const [email, setEmail] = useState(selectedEmployee.email);
    const [salary, setSalary] = useState(selectedEmployee.salary);
    const [date, setDate] = useState(selectedEmployee.date);

    const handleView = e => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !salary || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const employee = {
            id,
            firstName,
            lastName,
            email,
            salary,
            date
        };

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                employees.splice(i, 1, employee);
                break;
            }
        }

        setEmployees(employees);
        setIsViewing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleView}>
                <h1>View Employee</h1>
                <label >First Name</label>
              <p><p>{selectedEmployee.firstName}</p></p>
                <label htmlFor="lastName">Last Name</label>
                <p>{selectedEmployee.lastName}</p>
                <label >Email</label>
                <p><p>{selectedEmployee.email}</p></p>
                <label >Salary ($)</label>
               <p><p>{selectedEmployee.salary}</p></p>
                <label >Date</label>
               <p><p>{selectedEmployee.date}</p></p>
                <div style={{ marginTop: '30px' }}>
                    
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsViewing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default View
