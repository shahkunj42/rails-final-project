import {useNavigate} from 'react-router-dom';
import { Button } from 'semantic-ui-react'

function LogOut({setUser}){

    let navigate = useNavigate();

    function handleLogOut(){

        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
            setUser(null);
            }
        });
        navigate('/signin')
    }
    

    return(
        <div>
            <Button color='violet' onClick={handleLogOut} >Log Out</Button>
        </div>
    )
}

export default LogOut;