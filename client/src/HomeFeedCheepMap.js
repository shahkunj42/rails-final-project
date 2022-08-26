import { Feed, Icon } from 'semantic-ui-react'
import { useState } from 'react'

function HomeFeedCheepMap({cheep, user}) {
    const [count, setCount] = useState(cheep.likers_count);
    const [liked, setLiked] = useState(false)

    function handleLikes(){
        // setCount((prevCount) => prevCount + 1);


        //setLiked(liked => !liked)
        //console.log(count)
        //console.log(liked)

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
                        <Icon onClick={handleLikes} name='like' />{count}
                    </Feed.Like>
                </Feed.Meta>
            </Feed.Content>
        </Feed.Event>
        </Feed>
    )
}

export default HomeFeedCheepMap;