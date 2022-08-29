import { Form, Container, Button } from 'semantic-ui-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function CreateCheep({setMyCheeps}) {

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
        .then(navigate('/homefeed'))
    }
    
    const {cheep} = formState


    function handleFormChange(e) {
        const {name, value} = e.target
        setFormState((prevState) => ({...prevState, [name]:value}))
    }

    return(
        <div>
        <Container>
            <Form onSubmit={handleSubmit}>
                <input onChange={handleFormChange} type="text" id="cheep" placeholder="What's on your mind?" name="cheep" ></input>
            <Button color='violet' type="submit" >Cheep</Button>
                <br></br>
            </Form>
        </Container>
        </div>
    )
}

export default CreateCheep;