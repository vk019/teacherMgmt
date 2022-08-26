import React, { useState } from 'react'
import Swal from 'sweetalert2';

import Header from './Header';
import List from './List';
import Add from './Add';
import Edit from './Edit';
import Editleave from './Editleave';

import { employeesData } from '../data/index';
import { leavesData } from './Lindex';
import View from './View';

function Dashboard() {

    const [employees, setEmployees] = useState(employeesData);
    const [leaves, setLeaves] = useState(leavesData);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [selectedLeave, setSelectedLeave] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [isLEditing, setIsLEditing] = useState(false);
    const [isViewing, setIsViewing] = useState(false);
    const [isLViewing, setIsLViewing] = useState(false);

    const handleEdit = (id) => {
        const [employee] = employees.filter(employee => employee.id === id);

        setSelectedEmployee(employee);
        setIsEditing(true);
    }
    const handleLEdit = (id) => {
        const [leave] = leaves.filter(leave => leave.id === id);

        setSelectedLeave(leave);
        setIsLEditing(true);
    }
    const handleView = (id) => {
        const [employee] = employees.filter(employee => employee.id === id);

        setSelectedEmployee(employee);
        setIsViewing(true);
    }
    const handleLView = (id) => {
        const [leave] = leaves.filter(leave => leave.id === id);

        setSelectedLeave(leave);
        setIsViewing(true);
    }
    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [employee] = employees.filter(employee => employee.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setEmployees(employees.filter(employee => employee.id !== id));
            }
        });
    }


    return (
        <div className='container'>
            {/* List */}
            {!isAdding && !isEditing && !isViewing &&(
                <>
                    <Header
                        setIsAdding={setIsAdding}
                    />
                    <List
                        employees={employees}
                        leaves={leaves}
                        handleEdit={handleEdit}
                        
                        handleDelete={handleDelete}
                        handleView={handleView}
                        
                    />
                </>
            )}
        
            {/* Add */}
            {isAdding && (
                <Add
                    employees={employees}
                    setEmployees={setEmployees}
                    setIsAdding={setIsAdding}
                />
            )}
            {/* Edit */}
            {isEditing && (
                <Edit
                    employees={employees}
                    selectedEmployee={selectedEmployee}
                    setEmployees={setEmployees}
                    setIsEditing={setIsEditing}
                />
                
            )}
                        {/* LEdit */}
                        {isLEditing && (
                   <Editleave
                    leaves={leaves}
                    selectedLeave={selectedLeave}
                    setLeaves={setLeaves}
                    setIsLEditing={setIsLEditing}
                />
                
            )}
             {/* View */}
             {isViewing &&  (
                <View
                    employees={employees}
                    leaves={leaves}
                   
                    selectedLeave={selectedLeave}
                    selectedEmployee={selectedEmployee}
                    
                    setEmployees={setEmployees}
                    setLeaves={setLeaves}
                    
               
                />
            )}
            
             
            
        </div>
    )
}

export default Dashboard;