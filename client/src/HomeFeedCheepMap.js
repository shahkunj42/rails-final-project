function HomeFeedCheepMap({cheep, user}) {

    return (
        <div>
            <p>{user.username}</p>
            <img src={user.profile_image} alt="profile"></img>
            <p>{cheep.cheep}</p>
        </div>
    )
}

export default HomeFeedCheepMap;