import { Form } from 'semantic-ui-react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'


function CreateCheep({newCheepBoat}) {

    const [formState, setFormState] = useState({})

    let navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const newFormObj = {
            cheep,
            likes: 0
        }
        
        fetch("/cheeps", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFormObj),
        })
        .then((r) => r.json())
        .then((data) => newCheepBoat(data))
        navigate('/homefeed')
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

        
                <button type="submit" >Cheep!!!!!!!!!</button>
            </Form>
        </div>
    )
}

export default CreateCheep;