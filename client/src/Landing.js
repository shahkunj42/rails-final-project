import { Link } from 'react-router-dom'

function Landing () {




    return(
        <div>
            <h1>Signin or Signup</h1>
            <div>
                <Link to="/signup">
                    <button type="button">Signup</button>
                </Link>
                <Link to="/signin">
                    <button type="button">Signin</button>
                </Link>
            </div>
        </div>

    )
}

export default Landing;