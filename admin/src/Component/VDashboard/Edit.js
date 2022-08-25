import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ vacancies, selectedVacancy, setVacancies, setIsEditing }) {

    const id = selectedVacancy.id;

    const [SchoolName, setSchoolName] = useState(selectedVacancy.SchoolName);
    const [subject, setSubject] = useState(selectedVacancy.subject);
    const [posts, setPosts] = useState(selectedVacancy.posts);
    const [exp, setExp] = useState(selectedVacancy.exp);
    const [qual, setQual] = useState(selectedVacancy.qual);

    const handleUpdate = e => {
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
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Approved!',
            text: `${vacancy.SchoolName} 's vacancy is Approved`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Approve Vacancy</h1>
                <label htmlFor="SchoolName">School Name</label>
                <input
                    id="SchoolName"
                    type="text"
                    name="SchoolName"
                    value={SchoolName}
                    onChange={e => setSchoolName(e.target.value)}
                />
                <label htmlFor="subject">Subject</label>
                <input
                    id="Subject"
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                />
                <label htmlFor="posts">No. of Vacant Posts</label>
                <input
                    id="posts"
                    type="number"
                    name="posts"
                    value={posts}
                    onChange={e => setPosts(e.target.value)}
                />
                <label htmlFor="exp">Experience Required (Years)</label>
                <input
                    id="exp"
                    type="number"
                    name="exp"
                    value={exp}
                    onChange={e => setExp(e.target.value)}
                />
                <label htmlFor="qual">Qualification Required</label>
                <input
                    id="qual"
                    type="text"
                    name="qual"
                    value={qual}
                    onChange={e => setQual(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Approve" />
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
