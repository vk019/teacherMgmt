import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function Add({ vacancies, setVacancies, setIsAdding }) {

    const [SchoolName, setSchoolName] = useState('');
    const [subject, setSubject] = useState('');
    const [posts, setPosts] = useState('');
    const [exp, setExp] = useState('');
    const [qual, setQual] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!SchoolName || !subject|| !posts || !exp || !qual) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = vacancies.length + 1;
        const newVacancy = {
            id,
            SchoolName,
            subject,
            posts,
            exp,
            qual
        }
        vacancies.push(newVacancy);
        setVacancies(vacancies);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${SchoolName}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add Vacancy</h1>
                <label htmlFor="SchoolName">School Name</label>
                <input
                    id="SchoolName"
                    type="text"
                    ref={textInput}
                    name="SchoolName"
                    value={SchoolName}
                    onChange={e => setSchoolName(e.target.value)}
                />
                <label htmlFor="subject">Subject Name</label>
                <input
                    id="subject"
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
                <label htmlFor="exp">Expereince Required(years)</label>
                <input
                    id="exp"
                    type="number"
                    name="exp"
                    value={exp}
                    onChange={e => setExp(e.target.value)}
                />
                <label htmlFor="qual">Quaification Required</label>
                <input
                    id="qual"
                    type="text"
                    name="qual"
                    value={qual}
                    onChange={e => setQual(e.target.value)}
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