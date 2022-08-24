import {useState, useEffect} from "react"
import HomeFeedMap from "./HomeFeedMap";

function HomeFeed({user}) {
    const [homeFeed, setHomeFeed] = useState([])

    // const homeFeedMap = homeFeed.map((u) => { return (u) => u.cheeps.map((c) => {
    //     return <HomeFeedMap 
    //     key={c.id} 
    //     user={u} 
    //     />
    //     })})

    const homeFeedMap = homeFeed.map((u) => {
        return <HomeFeedMap
            key={u.id}
            username={u.username}
            image={u.profile_image}
            cheeps={u.cheeps}
        />
    })

    // const nestedHomeFeedMap = homeFeedMap.map((cheep))
   

    useEffect(() => {
        fetch("/homefeed")
        .then((r) => {
            if (r.ok) {
            r.json().then((user) => setHomeFeed(user));
            }
        });
        }, [user]);

    return (
        <div>
            <h1>homefeeeeeed</h1>
            <p>{homeFeedMap}</p>
        </div>
    );
}

export default HomeFeed