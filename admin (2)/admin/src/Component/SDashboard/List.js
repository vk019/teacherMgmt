import React from 'react'

function List({schools, handleEdit, handleDelete,handleView }) {

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
                        <th>No.</th>
                        <th>School Name</th>
                        <th>Email</th>
                        <th>Budget</th>
                        <th>Income</th>
                        <th>Date</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {schools.length > 0 ? (
                        schools.map((school, i) => (
                            <tr key={school.id}>
                                <td>{i + 1}</td>
                                <td>{school.SchoolName}</td>
                                <td>{school.email}</td>
                                
                                <td>{formatter.format(school.budget)}</td>
                             
                                <td>{formatter.format(school.income)}</td>
                                <td>{school.date} </td>
                                <td className="text-right">
                                    <button
                                        onClick={() => handleView(school.id)}
                                        className="button muted-button"
                                    >
                                        View
                                    </button>
                                </td>
                                <td className="text-right">
                                    <button
                                        onClick={() => handleEdit(school.id)}
                                        className="button muted-button"
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(school.id)}
                                        className="button muted-button"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Schools</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default List