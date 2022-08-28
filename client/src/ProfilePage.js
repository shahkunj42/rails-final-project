import { NavLink } from "react-router-dom";

function ProfilePage(){
    return(
        <div className="navDiv">
                <NavLink to="/profile" >Profile</NavLink>  | <NavLink to="/explore" >Explore</NavLink> 
                {/* |  <NavLink to="/trips">Trips</NavLink>  |  <NavLink to="/archive">Past Trips</NavLink>  */}
            </div>
    )
}

export default ProfilePage;