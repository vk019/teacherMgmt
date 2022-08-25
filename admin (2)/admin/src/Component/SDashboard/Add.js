import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function Add({ schools, setSchools, setIsAdding }) {

    const [SchoolName, setSchoolName] = useState('');
    const [email, setEmail] = useState('');
    const [budget, setbudget] = useState(''); 
    const [income, setincome] = useState('');
    const [date, setDate] = useState('');
    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!SchoolName ||!budget ||!income ||!email || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = schools.length + 1;
        const newschool = {
            id,
            SchoolName,
            email,
           income,
           budget,
            date
        }
        schools.push(newschool);
        setSchools(schools);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${SchoolName} 's data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add School</h1>
                <label htmlFor="SchoolName">School Name</label>
                <input
                    id="SchoolName"
                    type="text"
                    ref={textInput}
                    name="SchoolName"
                    value={SchoolName}
                    onChange={e => setSchoolName(e.target.value)}
                />
              
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="budget">Budget (₹)</label>
                <input
                    id="budget"
                    type="number"
                    name="budget"
                    value={budget}
                    onChange={e => setbudget(e.target.value)}
                />
                <label htmlFor="income">Income (₹)</label>
                <input
                    id="income"
                    type="number"
                    name="income"
                    value={income}
                    onChange={e => setincome(e.target.value)}
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
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add