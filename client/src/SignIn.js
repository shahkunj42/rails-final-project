import { useState } from "react";
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'


function SignIn () {
    const [formState, setFormState] = useState({})

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
        .then((data) => console.log(data))
    }
    
    const {username, password} = formState


    function handleFormChange(e) {
        const {name, value} = e.target
        setFormState((prevState) => ({...prevState, [name]:value}))
    }

    return(
        <div>
            <h1>Signin</h1>
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