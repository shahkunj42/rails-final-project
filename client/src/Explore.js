import { useState } from 'react'
import { Form, Container, Button } from 'semantic-ui-react'
import Error from './Error'
import FollowMap from './FollowMap'

function Explore ({users, me, setUser}) {
    const [formState, setFormState] = useState("")
    const [foundFriend, setFoundFriend] = useState(null)
    const [error, setError] = useState(null)


    function handleFormChange(e) {
        const {name, value} = e.target
        setFormState((prevState) => ({...prevState, [name]:value}))
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        const search = users.filter((user) => user.username.includes(formState.username))
        console.log(search)
    if (search.length > 0 ) {
            setFoundFriend(search)
    } else {
        setError({error: "No such user"});
        setFoundFriend(null)
            
        }
    }
    console.log(foundFriend)




    return (
        <div>
            <h1>Explore</h1>
            <div>
                <br></br>
                <Container>
                <Form onSubmit={handleSubmit}>

                <label htmlFor="username">Search for Your Friends Username!</label>
                <input onChange={handleFormChange} type="text" id="username" name="username" placeholder='asmokeandapancake' ></input>

                <br></br>
                <Button color='violet' type="submit">Submit</Button>
                </Form>
                <br></br>
                { foundFriend ? <FollowMap setUser={setUser} me={me} users={foundFriend} /> :  error ? <Error error={error} /> : null}
                </Container>
            </div>
        </div>
    )
}

export default Explore