import { NavLink } from "react-router-dom";

function ProfilePage(){
    return(
        <div className="navDiv">
                <NavLink to="/profile" >Profile</NavLink>  | <NavLink to="/explore" >Explore</NavLink> 
        </div>
    )
}

export default ProfilePage;