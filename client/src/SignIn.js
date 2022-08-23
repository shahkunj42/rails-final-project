import { useState } from "react";

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
            <form onSubmit={handleSubmit} className="form"></form>
                <label htmlFor="username">Username</label>
                <input onChange={handleFormChange} type="text" id="username" placeholder="username" name="username" ></input>

                <label htmlFor="password">Password</label>
                <input onChange={handleFormChange} type="password" id="password" placeholder="password" name="password" ></input>

                <button type="submit">Signin</button>
        </div>

    )
}

export default SignIn