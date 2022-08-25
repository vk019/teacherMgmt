import React, { useState } from 'react'
import Swal from 'sweetalert2';

function View({ schools, selectedSchool, setSchool, setIsViewing }) {

    const id = selectedSchool.id;

    const [SchoolName, setFirstName] = useState(selectedSchool.SchoolName);
    const [budget, setbudget] = useState(selectedSchool.budget);
    const [email, setEmail] = useState(selectedSchool.email);
    const [income, setSalary] = useState(selectedSchool.income);
    const [date, setDate] = useState(selectedSchool.date);

    const handleView = e => {
        e.preventDefault();

        if (!SchoolName || !budget || !email || !income || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const school = {
            id,
            SchoolName,
            budget,
            email,
            income,
            date
        };

        for (let i = 0; i < schools.length; i++) {
            if (schools[i].id === id) {
                schools.splice(i, 1, schools);
                break;
            }
        }

        setSchool(schools);
        setIsViewing(false);

     
    };

    return (
        <div className="small-container">
            <form onSubmit={handleView}>
                <h1>View School</h1>
                <label >School Name</label>
              <p>{selectedSchool.SchoolName}</p>
                
                <label >Email</label>
                <p>{selectedSchool.email}</p>
                <label>Budget</label>
                <p>{selectedSchool.budget}</p>
                <label >Income($)</label>
               <p>{selectedSchool.income}</p>
                <label >Date</label>
              <p>{selectedSchool.date}</p>
                
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
