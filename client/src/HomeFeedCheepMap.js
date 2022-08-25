import { Feed, Icon } from 'semantic-ui-react'
import { useState } from 'react'

function HomeFeedCheepMap({cheep, user}) {
    const [count, setCount] = useState(cheep.likers_count);

    function handleLikes(){
        // setCount((prevCount) => prevCount + 1);

        fetch(`/cheeps/${cheep.id}`, {
            method: 'PATCH', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(cheep.likers_count)
        }).then(r => r.json())
        .then(data => setCount(data.likers_count));
    }
    

    return (
        <Feed>
            <Feed.Event>
                <Feed.Label image={user.profile_image} />
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