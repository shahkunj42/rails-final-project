import { Link } from 'react-router-dom'
import { Button, Grid, Header } from 'semantic-ui-react'

function Landing() {
    return(
        <div className="landing">
            <Header size='huge'>Welcome to Cheep</Header>
            <br></br>
            <Grid columns={2} centered={true}>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <Button color='violet' fluid as={Link} to="/signup">Sign Up</Button>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Button color='violet' fluid as={Link} to="/signin">Sign In</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>

    )
}

export default Landing;