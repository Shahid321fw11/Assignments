import React from 'react'

const Logout = () => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }
    return <>
        <h1>Logout</h1>
        <button onClick={handleLogout}>LogOut</button>
    </>
}

export default Logout;