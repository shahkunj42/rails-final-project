import { Form } from 'semantic-ui-react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Button} from 'semantic-ui-react'


function CreateCheepFromProfile({setMyCheeps}) {

    const [formState, setFormState] = useState({})

    let navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const newFormObj = {
            cheep,
            likers_count: 0
        }
        
        fetch("/cheeps", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFormObj),
        })
        .then((r) => r.json())
        .then((data) => setMyCheeps((prevState) => [...prevState, data]))
        .then(navigate('/profile'))
    }
    
    const {cheep} = formState


    function handleFormChange(e) {
        const {name, value} = e.target
        setFormState((prevState) => ({...prevState, [name]:value}))
    }

    return(
        <div>
            <Form onSubmit={handleSubmit}>
                <label htmlFor="cheep">Cheep</label>
                <input onChange={handleFormChange} type="text" id="cheep" placeholder="What's on your mind?" name="cheep" ></input>

        
                <Button type="submit" >Cheep!!!!!!!!!</Button>
            </Form>
        </div>
    )
}

export default CreateCheepFromProfile;