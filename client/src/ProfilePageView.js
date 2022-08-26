import { Feed, Icon, Button } from 'semantic-ui-react'
import {NavLink } from 'react-router-dom'
import CreateCheepFromProfile from './CreateCheepFromProfile'

function ProfilePageView({myCheeps, setMyCheeps, user}){

    if(!user) {
        return(<h1></h1>)
    }
    else{

    const cheepMap = myCheeps.map((cheep) => {
        return (
        <Feed>
            <Feed.Event>
                <Feed.Label>
                <img src='https://d1rwvi4s5bian1.cloudfront.net/b86a92e1-37fb-44fe-b3fd-6e2c7428e491/img/career-advisers/placeholder.png' />
                </Feed.Label>
                <Feed.Content>
                    <Feed.Summary>
                        <a>{user.username}</a> posted on their page
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
            <img src={user.profile_image}></img>
            <p>{user.bio}</p>
            <Button><NavLink to="/profile/edit" >Edit Profile</NavLink></Button>
            {/* <CreateCheepFromProfile setMyCheeps={setMyCheeps}/> */}
            <p>{sorted}</p>
        </div>

    )
}
}

export default ProfilePageView;