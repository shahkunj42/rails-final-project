import { useState } from "react";
import { Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';


function SignIn ({setUser}) {
    const [formState, setFormState] = useState({})

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
        .then((r) => r.json())
        .then((data) => setUser(data))
        navigate('/homefeed')
    }
    
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
        </div>

    )
}

export default SignIn