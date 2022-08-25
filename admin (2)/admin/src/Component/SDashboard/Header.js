import React from 'react'
import '../../index.css'

function Header({ setIsAdding }) {
    return (
        <>
            <h1>School Management Page</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Add School</button>
            </div>
        </>
    )
}

export default Header