import { useState } from "react";
import { Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';


function SignIn ({setUser}) {
    const [formState, setFormState] = useState({})
    const [errors, setErrors] = useState(null)

    let navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const newFormObj = {
            username,
            password
        }
        
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFormObj),
        })
        .then((r) => {
        if (r.ok) {
            r.json().then((data) => setUser(data))
            .then(navigate('/homefeed'))}
        else {
            r.json().then((err) => setErrors(err.errors));
            }
        })}  
    
    const {username, password} = formState


    function handleFormChange(e) {
        const {name, value} = e.target
        setFormState((prevState) => ({...prevState, [name]:value}))
    }

    return(
        <div>
            <h1>Sign In</h1>
            <Form onSubmit={handleSubmit} className="form">
                <label htmlFor="username">Username</label>
                <input onChange={handleFormChange} type="text" id="username" placeholder="username" name="username" ></input>

                <label htmlFor="password">Password</label>
                <input onChange={handleFormChange} type="password" id="password" placeholder="password" name="password" ></input>

                <button type="submit">Signin</button>

            </Form>

            <p>{errors ? <h1>{errors}</h1> : null}</p>
        </div>

    )
}

export default SignIn