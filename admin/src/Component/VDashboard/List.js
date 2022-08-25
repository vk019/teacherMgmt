import React from 'react'

function List({ vacancies, handleEdit, handleDelete,handleView }) {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: null
    });

    return (
        <div className='contain-table'>
            <table className='striped-table'>
                <thead>
                    <tr>
                        <th>Vacancy ID</th>
                        <th>School Name</th>
                        <th>Subject</th>
                        <th>No.of Vacant Posts</th>
                        <th>Experience Required</th>
                        <th>Qualification Required</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {vacancies.length > 0 ? (
                        vacancies.map((vacancy, i) => (
                            <tr key={vacancy.id}>
                                <td>{i + 1}</td>
                                <td>{vacancy.SchoolName}</td>
                                <td>{vacancy.subject}</td>
                                <td>{vacancy.posts}</td>
                                <td>{vacancy.exp}</td>
                                <td>{vacancy.qual} </td>
                                <td className="text-right">
                                    <button
                                        onClick={() => handleView(vacancy.id)}
                                        className="button muted-button"
                                    >
                                        View
                                    </button>
                                </td>
                                <td className="text-right">
                                    <button
                                        onClick={() => handleEdit(vacancy.id)}
                                        className="button muted-button"
                                    >
                                        Approve
                                    </button>
                                </td>
                                
                              
                                
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(vacancy.id)}
                                        className="button muted-button"
                                    >
                                        Reject
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Vacancies</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default List