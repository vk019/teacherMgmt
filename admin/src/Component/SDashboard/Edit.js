import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ schools, selectedSchool, setSchool, setIsEditing }) {

    const id = selectedSchool.id;

    const [SchoolName, setSchoolName] = useState(selectedSchool.SchoolName);
    const [budget, setBudget] = useState(selectedSchool.budget);
    const [income, setIncome] = useState(selectedSchool.income);
    const [email, setEmail] = useState(selectedSchool.email);
    const [date, setDate] = useState(selectedSchool.date);

    const handleUpdate = e => {
        e.preventDefault();

        if (!SchoolName ||!budget||!income ||!email ||!date) {
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
            email,
            budget,
            income,
            date
        };

        for (let i = 0; i < schools.length; i++) {
            if (schools[i].id === id) {
                schools.splice(i, 1, school);
                break;
            }
        }

        setSchool(schools);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${school.SchoolName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit School</h1>
                <label htmlFor="SchoolName">School Name</label>
                <input
                    id="SchoolName"
                    type="text"
                    name="SchoolName"
                    value={SchoolName}
                    onChange={e => setSchoolName(e.target.value)}
                />
                <label htmlFor="budget">Budget</label>
                <input
                    id="budget"
                    type="text"
                    name="budget"
                    value={budget}
                    onChange={e => setBudget(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="income">Income (₹)</label>
                <input
                    id="income"
                    type="number"
                    name="income"
                    value={income}
                    onChange={e => setIncome(e.target.value)}
                />
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit
