import React from 'react';

export default function Logout(props) {
    const { logout } = props

    const onClick = () => {
        logout()
    }
    
    return (
        <button id="logout" onClick={onClick}>Logout</button>
    )
}