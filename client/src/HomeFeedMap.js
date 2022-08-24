import HomeFeedCheepMap from "./HomeFeedCheepMap";
import {useEffect, useState} from "react"

function HomeFeedMap({cheep, users}) {
    // const [users, setUser] = useState(null)

    // useEffect(() => {
    //     fetch("/users")
    //     .then(res => res.json())
    //     .then(user => setUser(user))
    // },[])

    const cheepUser = users.find(user => user.id === cheep.user_id)

    


    return(
        <div>
            {/* <p>{feedCheepMap}</p> */}
            <HomeFeedCheepMap cheep={cheep} user={cheepUser}/>
        </div>
    )
}

export default HomeFeedMap;