import { Feed, Icon, Button, Image } from 'semantic-ui-react'

function CheepView({cheep, user, onDeleteCheep}) {

    function clickHandle() {

        fetch(`/cheeps/${cheep.id}`, {
            method: "DELETE"
        })
        onDeleteCheep(cheep.id)
    }

    const cheepTime = (cheep.created_at).toString().slice(5, 16)
    const cheepTimeDate = cheepTime.slice(0,5)
    const cheepTimeTime = cheepTime.slice(6)

    return(
        <div>
        <Feed key={cheep.id}>
            <Feed.Event>
                <Feed.Label>
                <Image src={user.profile_image} alt="profile_img" />
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
                        <Button className="trash_button" onClick={clickHandle} icon>
                        <Icon color="violet" className="trash_button" size='small' name='trash'/>
                        </Button>
                        <Icon name='like' />{cheep.likers_count}
                    </Feed.Like>
                </Feed.Meta>
            </Feed.Content>
        </Feed.Event>
        </Feed>
        <br></br>

        </div>
    )
}

export default CheepView