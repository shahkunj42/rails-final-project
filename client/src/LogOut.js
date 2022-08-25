import {useNavigate} from 'react-router-dom';

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
            <button onClick={handleLogOut} >Log Out</button>
        </div>
    )
}

export default LogOut;