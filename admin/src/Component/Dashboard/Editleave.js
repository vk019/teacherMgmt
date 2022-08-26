import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Editleave({ leaves, selectedleave, setleaves, setIsLEditing }) {

    const id = selectedleave.id;

    const [ay, setay] = useState(selectedleave.ay);
    const [acl, setacl] = useState(selectedleave.acl);
    const [ncl, setncl] = useState(selectedleave.ncl);
    const [nml, setnml] = useState(selectedleave.nml);
    const [bl, setbl] = useState(selectedleave.bl);

    const handleUpdate = e => {
        e.preventDefault();

        if (!ay || !acl|| !ncl || !nml || !bl) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const leave = {
            id,
            ay,
            acl,
            ncl,
            nml,
            bl
        };

        for (let i = 0; i < leaves.length; i++) {
            if (leaves[i].id === id) {
                leaves.splice(i, 1, leave);
                break;
            }
        }

        setleaves(leaves);
        setIsLEditing(false);

       
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit Leave</h1>
                <label htmlFor="ay">Academic Year</label>
                <input
                    id="ay"
                    type="text"
                    name="ay"
                    value={ay}
                    onChange={e => setay(e.target.value)}
                />
                <label htmlFor="acl">Allocated  Casual Leaves</label>
                <input
                    id="acl"
                    type="text"
                    name="acl"
                    value={acl}
                    onChange={e => setacl(e.target.value)}
                />
                <label htmlFor="ncl">No. of Casual Leave</label>
                <input
                    id="ncl"
                    type="number"
                    name="ncl"
                    value={ncl}
                    onChange={e => setncl(e.target.value)}
                />
                <label htmlFor="nml">No. of Medical Leaves</label>
                <input
                    id="nml"
                    type="number"
                    name="nml"
                    value={nml}
                    onChange={e => setnml(e.target.value)}
                />
                <label htmlFor="bl">Balance Leaves</label>
                <input
                    id="bl"
                    type="number"
                    name="bl"
                    value={bl}
                    onChange={e => setbl(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsLEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Editleave
