import {useState, useEffect} from "react"
import HomeFeedMap from "./HomeFeedMap";
import { Header } from 'semantic-ui-react'

function HomeFeed({user, users, myCheeps}) {
    const [homeFeed, setHomeFeed] = useState([])

    useEffect(() => {
        fetch("/homefeed")
        .then((r) => {
            if (r.ok) {
            r.json().then((user) => setHomeFeed(user));
            }
        });
        }, [user]);


    const homeFeedMap = homeFeed.map((user)=> { return user.cheeps.map((cheep)=> {
        return cheep;
    })})

    
    let cheepArray = []
    console.log(cheepArray.length)

    if (homeFeedMap.length > 1) {
        console.log("Bong")
        for (let i = 0; i < (homeFeedMap.length); i++) {
            cheepArray = cheepArray.concat(homeFeedMap[i])
        }
    }else if (homeFeed.length !== 0 ){
        console.log("Bing")
        cheepArray = homeFeedMap[0]
    }else {
        return (<div></div>)
    }

    const forSorting = cheepArray.concat(myCheeps)

    const sorted = forSorting.sort((a,b) => a.id > b.id ? -1 : 1)

    const cheepDisplay = sorted.map((cheep) => {
        return <HomeFeedMap key={cheep.id} cheep ={cheep} users={users} user={user}  />
    })

    return (
        <div>
            <Header as='h1'>Home</Header>
            <div>{cheepDisplay}</div>
        </div>
    );
}

export default HomeFeed