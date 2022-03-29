import React, { useEffect } from "react";

export default function FriendsList(props) {
    const { getFriends } = props;

    useEffect(() => {
        getFriends()
    }, [])

    return(
        <div>
            <h2>Friends List</h2>
            
        </div>
    )
}