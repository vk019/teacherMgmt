import React, { useState } from 'react'
import Swal from 'sweetalert2';

import Header from './Header';
import List from './List';
import Add from './Add';
import Edit from './Edit';

import { schoolsData } from './Data';
import View from './View';

function SDashboard() {

    const [schools, setSchools] = useState(schoolsData);
    const [selectedSchool, setSelectedSchool] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [isViewing, setIsViewing] = useState(false);

    const handleEdit = (id) => {
        const [School] = schools.filter(school => school.id === id);

        setSelectedSchool(School);
        setIsEditing(true);
    }
    const handleView = (id) => {
        const [school] = schools.filter(school => school.id === id);

        setSelectedSchool(school);
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
                const [school] = schools.filter(school => school.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${school.SchoolName} 's data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setSchools(schools.filter(school => school.id !== id));
            }
        });
    }


    return (
        <div className='container'>
            {/* List */}
            {!isAdding && !isEditing && !isViewing && (
                <>
                    <Header
                        setIsAdding={setIsAdding}
                    />
                    <List
                        schools={schools}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                        handleView={handleView}
                    />
                </>
            )}
            {/* Add */}
            {isAdding && (
                <Add
                    schools={schools}
                    setSchools={setSchools}
                    setIsAdding={setIsAdding}
                />
            )}
            {/* Edit */}
            {isEditing && (
                <Edit
                    schools={schools}
                    selectedSchool={selectedSchool}
                    setSchools={setSchools}
                    setIsEditing={setIsEditing}
                />
            )}
              {/* Edit */}
              {isViewing && (
                <View
                    schools={schools}
                    selectedSchool={selectedSchool}
                    setSchools={setSchools}
                    setIsViewing={setIsViewing}
                />
            )}
        </div>
    )
}

export default SDashboard;