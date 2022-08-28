import { Feed, Icon, Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import CheepView from './CheepView'

function ProfilePageView({myCheeps, user, onDeleteCheep}){

    if(!user) {
        return(<h1> </h1>)
    }
    else{

    const cheepMap = myCheeps.map((cheep) => {
        return ( 
        <CheepView onDeleteCheep={onDeleteCheep} cheep={cheep} user={user} />
        )
    })

    const sorted = cheepMap.reverse()

    return(
        <div>
            <p>{user.first_name} {user.last_name}</p>
            <p>{user.username}</p>
            <img src={user.profile_image} alt="profile_img"></img>
            <p>{user.bio}</p>
            <NavLink to="/profile/edit" >Edit Profile</NavLink> | <NavLink to="/homefeed" >Home</NavLink> | <NavLink to="/explore" >Explore</NavLink>
            <div>{sorted}</div>
        </div>

    )
}
}

export default ProfilePageView;