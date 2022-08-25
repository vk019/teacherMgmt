import React, { useState } from 'react'
import Swal from 'sweetalert2';

import Header from './Header';
import List from './List';
import Add from './Add';
import Edit from './Edit';

import { vacancyData } from './data';
import View from './View';

function Dashboard() {

    const [vacancies, setVacancies] = useState(vacancyData);
    const [selectedVacancy, setSelectedVacancy] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [isViewing, setIsViewing] = useState(false);

    const handleEdit = (id) => {
        const [vacancy] = vacancies.filter(vacancy => vacancy.id === id);

        setSelectedVacancy(vacancy);
        setIsEditing(true);
    }
    const handleView = (id) => {
        const [vacancy] = vacancies.filter(vacancy => vacancy.id === id);

        setSelectedVacancy(vacancy);
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
                const [vacancy] = vacancies.filter(vacancy => vacancy.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${vacancy.SchoolName} 's data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setVacancies(vacancies.filter(vacancy => vacancy.id !== id));
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
                        vacancies={vacancies}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                        handleView={handleView}
                    />
                </>
            )}
        
            {/* Add */}
            {isAdding && (
                <Add
                    vacancies={vacancies}
                    setVacancies={setVacancies}
                    setIsAdding={setIsAdding}
                />
            )}
            {/* Edit */}
            {isEditing && (
                <Edit
                    vacancies={vacancies}
                    selectedVacancy={selectedVacancy}
                    setVacancies={setVacancies}
                    setIsEditing={setIsEditing}
                />
            )}
             {/* View */}
             {isViewing && (
                <View
                    vacancies={vacancies}
                    selectedVacancy={selectedVacancy}
                    setVacancies={setVacancies}
                    setIsViewing={setIsViewing}
                />
            )}
             
            
        </div>
    )
}

export default Dashboard;