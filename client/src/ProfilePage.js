import { Button } from "semantic-ui-react";
import {NavLink } from "react-router-dom";

function ProfilePage(){
    return(
        <div className="navDiv">
                <NavLink to="/profile" >Profile</NavLink>  
                {/* |  <NavLink to="/trips">Trips</NavLink>  |  <NavLink to="/archive">Past Trips</NavLink>  */}
            </div>
        // <Button>profile page</Button>
    )
}

export default ProfilePage;