import { Link } from 'react-router-dom'
import { Button, Grid } from 'semantic-ui-react'

function Landing() {
    return(
        <div>
            <h1>Welcome to Cheep</h1>
            <Grid columns={2} centered={true}>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <Button fluid as={Link} to="/signup">Sign Up</Button>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Button fluid as={Link} to="/signin">Sign In</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>

    )
}

export default Landing;