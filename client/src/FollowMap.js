import Follow from "./Follow"

function FollowMap({users, me, setUser}) {

    const userMap = users.map((user) => {
        return(<Follow me={me} setUser={setUser} user={user} />)
    })

    return(
        <div>{userMap}</div>
    )
}

export default FollowMap