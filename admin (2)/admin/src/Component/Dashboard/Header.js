import React from 'react'
import '../../index.css'

function Header({ setIsAdding }) {
    return (
        <>
            <h1>Teacher Management Page</h1>
            <div>
                <button onClick={() => setIsAdding(true)} className='round-button'>Add Teacher</button>
            </div>
        </>
    )
}

export default Header