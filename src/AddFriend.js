import React, {  useState} from 'react';

const initialFriendValues = {
    id: null,
    name: '',
    age: null,
    email: '',
}

export default function AddFriend(props) {
    const [values, setValues] = useState(initialFriendValues)
    const { onSubmit } = props

    const onChange = e => {
        const { id, value } = e.target
        setValues({ ...values, [id]: value })
      }

    const submit = e => {
        e.preventDefault()
        onSubmit(values)
    }

    return (
        <form onSubmit={submit}>
            <h2>Add Friend</h2>
            <label>Friend Name</label>
            <input
                onChange={onChange}
                placeholder="Enter friend name"
                id="name"
                value={values.username}
             />
            <label>Friend Email</label>
            <input 
                onChange={onChange}
                placeholder="Enter friend email"
                id="email"
                value={values.password}
            />
            <button>Submit</button>
        </form>
    )
}