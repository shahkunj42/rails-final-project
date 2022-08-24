function HomeFeedMap({user, username, image, cheeps}) {

    return(
        <div>
            <h1>{username}</h1>
            <p>{image}</p>
            <p>{cheeps.map((cheeps)=>cheeps.cheep)}</p>
        </div>
    )
}

export default HomeFeedMap;