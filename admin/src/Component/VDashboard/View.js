import React, { useState } from 'react'
import Swal from 'sweetalert2';

function View({ vacancies, selectedVacancy, setVacancies, setIsViewing }) {

    const id = selectedVacancy.id;

    const [SchoolName, setFirstName] = useState(selectedVacancy.SchoolName);
    const [subject, setSubject] = useState(selectedVacancy.subject);
    const [posts, setPosts] = useState(selectedVacancy.posts);
    const [exp, setExp] = useState(selectedVacancy.exp);
    const [qual, setQual] = useState(selectedVacancy.qual);

    const handleView = e => {
        e.preventDefault();

        if (!SchoolName || !subject || !posts || !exp || !qual) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const vacancy = {
            id,
            SchoolName,
            subject,
            posts,
            exp,
            qual
        };

        for (let i = 0; i < vacancies.length; i++) {
            if (vacancies[i].id === id) {
                vacancies.splice(i, 1, vacancy);
                break;
            }
        }

        setVacancies(vacancies);
        setIsViewing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${vacancy.firstName}'s Request has been accepted.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleView}>
                <h1>View Vacancy</h1>
                <label >First Name</label>
              <p>{selectedVacancy.SchoolName}</p>
                <label >Subject</label>
                <p>{selectedVacancy.subject}</p>
                <label >No. of Vacant Posts</label>
                <p>{selectedVacancy.posts}</p>
                <label >Experience Required (years)</label>
               <p>{selectedVacancy.exp}</p>
                <label >Qualification Required</label>
               <p>{selectedVacancy.qual}</p>
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
