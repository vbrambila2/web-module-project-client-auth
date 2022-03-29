import React, { useEffect } from "react";
import { Navigate } from 'react-router-dom';

export default function FriendsList(props) {
    const { getFriends, list } = props;
    console.log(list)

    if (!window.localStorage.getItem('token')) {
        return <Navigate to="/" />
      }

    useEffect(() => {
        getFriends()
    }, [])

    return(
        <div>
            <h2>Friends List</h2>
            { 
                list.map(li=> {
                    <div>
                        <div>{li.name}</div>
                        <div>{li.age}</div>
                    </div>
                })
            }
        </div>
    )
}