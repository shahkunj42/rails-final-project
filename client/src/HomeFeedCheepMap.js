import './App.css';
import { Feed, Icon, Container } from 'semantic-ui-react'
import { useState } from 'react'

function HomeFeedCheepMap({cheep, user}) {
    const [count, setCount] = useState(cheep.likers_count);
    const [liked, setLiked] = useState(false)

    function handleLikes(){
  
        if(!liked) {

        fetch(`/like/${cheep.id}`, {
            method: 'PATCH', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(cheep.likers_count)
        }).then(r => r.json())
        .then(data => setCount(data))
        .then(setLiked((liked) => (!liked)))
        }else {
            fetch(`/unlike/${cheep.id}`,{
                method: 'PATCH', 
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(cheep.likers_count)
            }).then(r => r.json())
            .then(data => setCount(data))
            .then(setLiked((liked) => (!liked)))
        }
    }

    const cheepTime = (cheep.created_at).toString().slice(5, 16)
    const cheepTimeDate = cheepTime.slice(0,5)
    const cheepTimeTime = cheepTime.slice(6)

    return (
    <Container>
        <Feed>
            <Feed.Event>
                <Feed.Label>
                <img src={user.profile_image} alt="profile_image"/>
                </Feed.Label>
                <Feed.Content>
                    <Feed.Summary>
                        <span >{`${user.first_name} ${user.last_name}`}</span><i className="username"> {user.username}</i>
                        <Feed.Date>{`${cheepTimeDate} ${cheepTimeTime}`}</Feed.Date>
                    </Feed.Summary>
                    <Feed.Extra text>
                    {cheep.cheep}
                    </Feed.Extra>
                <Feed.Meta>
                    <Feed.Like>
                        <Icon onClick={handleLikes} name='like' />{count}
                    </Feed.Like>
                </Feed.Meta>
            </Feed.Content>
        </Feed.Event>
        </Feed>
    </Container>
    )
}

export default HomeFeedCheepMap;