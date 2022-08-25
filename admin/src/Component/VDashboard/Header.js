import React from 'react'
import '../../index.css'

function Header({ setIsAdding }) {
    return (
        <>
            <h1>Vacancy Management Page</h1>
            <div>
                <button onClick={() => setIsAdding(true)} className='round-button'>Add Vacancy</button>
            </div>
        </>
    )
}

export default Header