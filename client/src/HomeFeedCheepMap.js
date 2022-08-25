import { Feed, Icon } from 'semantic-ui-react'

function HomeFeedCheepMap({cheep, user}) {

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
                        <Icon name='like' />{user.likes}
                    </Feed.Like>
                </Feed.Meta>
            </Feed.Content>
        </Feed.Event>
        </Feed>
            // <p>{user.username}</p>
            // <img src={user.profile_image} alt="profile"></img>
            // <p>{cheep.cheep}</p>
    )
}

export default HomeFeedCheepMap;