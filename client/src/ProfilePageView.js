import { NavLink } from 'react-router-dom'
import CheepView from './CheepView'
import { Image, Header } from 'semantic-ui-react'

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
            <Header as='h3'>{user.first_name} {user.last_name}</Header>
            <Header as='h4'>@{user.username}</Header>
            <Image src={user.profile_image} alt="profile_img" size='small' circular centered></Image>
            <Header as='h5'>{user.bio}</Header>
            <NavLink to="/profile/edit" >Edit Profile</NavLink>
            <br></br>
            <br></br>
            <br></br>
            <div>{sorted}</div>
        </div>

    )
}
}

export default ProfilePageView;