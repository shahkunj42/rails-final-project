import { Form, Button } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";
import { useState } from "react"

function ProfilePageEdit ({user, setUser}){
    const [formState, setFormState] = useState({})

    let navigate = useNavigate();

    if (!user){
        return (<div></div>)
    } else {


    function handleSubmit(e) {
        e.preventDefault();
        const newFormObj = {
            profile_image,
            first_name,
            last_name,
            bio,
        }
        
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFormObj),
        })
        .then((r) => r.json())
        .then((data) => setUser(data))
        .then(navigate('/profile'))
    }
    
    const { profile_image, bio, first_name, last_name } = formState


    function handleFormChange(e) {
        const {name, value} = e.target
        setFormState((prevState) => ({...prevState, [name]:value}))
    }

    return(
        <div>
            <h1>Edit Your Page</h1>
            
            <Form onSubmit={handleSubmit}>

                <label htmlFor="first_name">First Name</label>
                <input onChange={handleFormChange} type="text" id="first_name" name="first_name" placeholder={user.first_name}></input>

                <label htmlFor="last_name">Last Name</label>
                <input onChange={handleFormChange} type="text" id="last_name" name="last_name"  placeholder={user.last_name}></input>
                
                <label htmlFor="profile_image">Image</label>
                <input onChange={handleFormChange} type="text" id="profile_image" name="profile_image"  ></input>

                <label htmlFor="bio">Bio</label>
                <input onChange={handleFormChange} type="text" id="bio" name="bio" placeholder={user.bio}></input>

                <Button color='violet' type="submit">Submit</Button>

                </Form>

        </div>
    );
}
}

export default ProfilePageEdit;