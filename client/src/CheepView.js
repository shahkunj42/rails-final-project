import { Feed, Icon, Button } from 'semantic-ui-react'

function CheepView({cheep, user, onDeleteCheep}) {

    function clickHandle() {

        fetch(`/cheeps/${cheep.id}`, {
            method: "DELETE"
        })
        onDeleteCheep(cheep.id)
    }

    return(
        <div>
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
        </Feed>
        <Button onClick={clickHandle}>Delete Cheep</Button>
        </div>
    )
}

export default CheepView