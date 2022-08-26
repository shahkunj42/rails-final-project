import { Feed, Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

function ProfilePageView({myCheeps, user}){

    if(!user) {
        return(<h1> </h1>)
    }
    else{

    const cheepMap = myCheeps.map((cheep) => {
        return (
        <Feed key={cheep.id}>
            <Feed.Event>
                <Feed.Label>
                <img src={user.profile_image} alt="profile_img"/>
                </Feed.Label>
                <Feed.Content>
                    <Feed.Summary>
                        <p>{user.username}</p> posted on their page
                        <Feed.Date>3 days ago</Feed.Date>
                    </Feed.Summary>
                    <Feed.Extra text>
                    {cheep.cheep}
                    </Feed.Extra>
                <Feed.Meta>
                    <Feed.Like>
                        <Icon name='like' />{cheep.likers_count}
                    </Feed.Like>
                </Feed.Meta>
            </Feed.Content>
        </Feed.Event>
        </Feed>)
    })

    const sorted = cheepMap.reverse()

    return(
        <div>
            <p>{user.first_name} {user.last_name}</p>
            <p>{user.username}</p>
            <img src={user.profile_image} alt="profile_img"></img>
            <p>{user.bio}</p>
            <NavLink to="/profile/edit" >Edit Profile</NavLink> | <NavLink to="/homefeed" >Home</NavLink>
            <div>{sorted}</div>
        </div>

    )
}
}

export default ProfilePageView;