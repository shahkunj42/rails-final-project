import { Feed, Icon, Button } from 'semantic-ui-react';
import { useNavigate } from "react-router-dom";

function Follow({user, me, setUser}) {
    let navigate = useNavigate();

    if (!user) {
        return(
            <div></div>
        )
    } else {

    

    const cheepMap = user.cheeps.map((cheep) => {
        return (
        <Feed key={cheep.id}>
            <Feed.Event>
                <Feed.Label>
                <img src={user.profile_image} alt="profile_img"/>
                </Feed.Label>
                <Feed.Content>
                    <Feed.Summary>
                        <p>{user.username}</p> posted on their page
                        <Feed.Date>{cheep.created_at}</Feed.Date>
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


    function clickHandle() {
        let followObj = {
            me: me,
            you: user
        }

        fetch('/follow', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(followObj),
        }).then((r) => r.json())
        .then((data) => setUser(data))
        .then(navigate('/homefeed'))
    }

    return (
        <div>
            <p>{user.first_name} {user.last_name}</p>
            <p>{user.username}</p>
            <img src={user.profile_image} alt="profile_img"></img>
            <p>{user.bio}</p>
            <Button onClick={clickHandle}>Follow!</Button>
            <div>{sorted}</div>
        </div>
    )
}
}

export default Follow