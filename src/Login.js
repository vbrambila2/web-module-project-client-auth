import React, { useState }  from "react";

const initialFormValues = {
    username: '',
    password: '',
}

export default function Login(props) {
    const [values, setValues] = useState(initialFormValues)
    const { login } = props;

    const onChange = e => {
        const { id, value } = e.target
        setValues({ ...values, [id]: value })
      }

    const onSubmit = e => {
        e.preventDefault()
        login(values)
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>Login</h2>
            <label>Username</label>
            <input
                onChange={onChange}
                placeholder="Enter username"
                id="username"
                value={values.username}
             />
            <label>Password</label>
            <input 
                onChange={onChange}
                placeholder="Enter password"
                id="password"
                value={values.password}
            />
            <button>Submit</button>
        </form>
    )
}